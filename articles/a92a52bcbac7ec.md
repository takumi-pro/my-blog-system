---
title: "217.contains-deplicateは意外と奥が深い"
emoji: "🎃"
type: "tech" # tech: 技術記事 / idea: アイデア
topics: ["leetcode"]
published: true
publishedAt: "2024/10/20"
---

LeetCode easy問題の「217.contains-dplicate」を解いた。
後から解答コードを見返してみるとツッコミどころがあったため、リファクタ案などを書いていく。


## 問題内容
https://leetcode.com/problems/contains-duplicate/

>Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

>整数配列 nums が与えられたとき、配列中に少なくとも2回出現する値があれば真を返し、すべての要素が異なる場合は偽を返す。

配列の要素に重複があるかどうかを判定するシンプルな問題

## 解答コード

```cpp
/*
 * @lc app=leetcode id=217 lang=cpp
 *
 * [217] Contains Duplicate
 */

// @lc code=start
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        set<int> s;
        for (const auto& n: nums) {
            if (s.find(n) != s.end()) return true;
            s.insert(n);
        }
        return false;
    }
};
// @lc code=end
```

nums配列の要素をSetに格納していき、すでにSetに存在する場合にはtrueを返すようなコードを書いた。
配列の2重ループで判定できるが、効率が悪くなってしまうため今回はSetを用いた解法とした。

## ツッコミどころ
上記のコードを見直して出てきたツッコミどころを書いていく。

### std::setではなくてstd::unordered_setの方が良いのでは？
Setは重複のない要素を管理できるデータ構造であるが、要素の集まりがソートされているかされていないかでインタフェースが異なり、時間計算量も異なってくる。`std::set`は内部的に要素がソートされており、探索や要素の追加・削除の計算量は`O(log(n))`となっている。一方で`std::unordered_set`は内部で要素がソートされずに管理されており、要素の探索や追加・削除の計算量は`O(1)`で済む。

今回の問題では、要素がソートされている必要はないため`std::unrdered_set`を使う方が適切だと考えられる。

### `const auto&`ではなくて`int`で良いのでは？
そもそもautoって何かわからずに使っていたので調べた（typescriptのany型的な？ものだと思っていた）↓

>C++11 から、変数宣言時に具体的な型名のかわりに  auto  キーワードを指定する事によって、変数の型を初期化子から推論できるようになった。
>型推論のための  auto  は、基本的には糖衣構文であり具体的な型で書き替えることが可能であるが、上記のクロージャ型のように書き換えが不可能なケースも存在する。

どうやら型推論してくれるみたい。
「基本的には糖衣構文であり具体的な型で書き替えることが可能」とあるので、autoか具体的な型どちらでも良さそう。

`const xxx&`については以下。

>変数宣言にconst参照 const auto& e を書くとコンテナ内の要素の変更を禁止し、要素のコピーも行わない。参照 auto& e を書くと、コンテナ内の要素を変更できる。実体 auto e を書くと各要素がコピーコンストラクタによってコピーされてからfor文に渡される。

コンテナ内では要素の参照しか基本しないので`const auto&`で良さそう。

## リファクタ後コード

```cpp
/*
 * @lc app=leetcode id=217 lang=cpp
 *
 * [217] Contains Duplicate
 */

// @lc code=start
class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        unordered_set<int> us;
        for (const auto& n: nums) {
            if (us.contains(n)) return true;
            us.insert(n);
        }
        return false;
    }
};
// @lc code=end
```

## 参考
- https://atcoder.jp/contests/apg4b/tasks/APG4b_aa?lang=ja
- みんなのデータ構造
- https://www.geeksforgeeks.org/set-vs-unordered_set-c-stl/
