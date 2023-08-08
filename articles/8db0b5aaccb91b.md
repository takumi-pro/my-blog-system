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
- Java関連の拡張機能：Extension Pack for Java

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

