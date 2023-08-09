---
title: "【Java】VSCodeでサーブレットアプリの環境構築"
emoji: "👌"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: []
published: true
publishedAt: "2023/08/08"
---

Javaアプリケーションを作成するために「スッキリわかるサーブレット&JSP」を参考にしてまずは、サーブレットアプリケーションをVSCodeで開発する。
そのための環境構築を行う。

## 前提環境
- IDE：VSCode
- Java関連の拡張機能
  - Extension Pack for Java
  - Community Server Connectors

### ディレクトリ構成
```bash
java-servlet
├── HelloServlet.java
└── helloservlet
    ├── WEB-INF
    │   ├── classes
    │   │   └── HelloServlet.class
    │   └── web.xml
    └── index.html
```

## サーブレットクラスの作成
ルートディレクトリに`src`ディレクトリを作成して、その中に`HelloServlet.java`ファイルを作成する。

```java
package src;
import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;

public class HelloServlet extends HttpServlet {
    public void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<html><body>");
        out.println("<h2>Hello from MyServlet</h2>");
        out.println("</body></html>");
    }
}
```
現状では、クラスパスが通っていないため、import文やクラスに赤線が引かれてエラーが発生している。

## クラスパスを通す

VSCodeサイドバーの`JAVA PROJECTS`から`Configure Classpath`を選択。

![java-servlet1](/images/java-servlet1.png)

`Referenced Libraries`にTomcatのlibフォルダにある`servlet-api.jar`のパスを追加することで、エラー栓が消える。

## Tomcatをインストールする
VSCodeの拡張機能`Community Server Connectors`を使用してTomcatv10.0.0をインストールしていく。
`Create New Server`を選択
執筆中

## コンテキストの設定
今回は`$CATALINA_HOME/conf/Catalina/localhost`ディレクトリにhello.xmlとして以下を設定した
```xml
<Context path="/hello" docBase="/Users/igarashitakumi/Documents/java/java-servlet/helloservlet/"/>
```

## web.xmlの記述

```xml:web.xml
<?xml version="1.0" encoding="UTF-8"?>
<web-app xmlns="https://jakarta.ee/xml/ns/jakartaee"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="https://jakarta.ee/xml/ns/jakartaee
                      https://jakarta.ee/xml/ns/jakartaee/web-app_5_0.xsd"
  version="5.0">
  <servlet>
    <servlet-name>helloservlet</servlet-name>
    <servlet-class>HelloServlet</servlet-class>
  </servlet>

  <servlet-mapping>
    <servlet-name>helloservlet</servlet-name>
    <url-pattern>/helloservlet</url-pattern>
  </servlet-mapping>
</web-app>
```

## 画面表示
Tomcatを起動したら、`localhost:8080/hello`にアクセスして作成したindex.htmlファイルのないような表示されていることを確認する。
さらに、/hello/helloservletにアクセスしてサーブレットで作成した。レスポンス内容が表示されていることも確認する。

## 参考
https://www.javadrive.jp/servlet/context/index2.html