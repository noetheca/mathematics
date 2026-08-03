---
locale: ja
title: 命題と論理結合子
summary: 命題は真か偽かが定まる文であり、論理結合子は命題を否定・かつ・または・ならば・同値という形で組み合わせます。
sources:
  - title: Open Logic Project, The Open Logic Text, Complete Build
    url: https://builds.openlogicproject.org/open-logic-complete.pdf
    note: Part II Chapter 7 §§7.2, 7.5–7.6, pp.107–114。命題論理の論理式、真理値割当て、充足と論理的帰結の定義を確認。
  - title: forall x Calgary, Chapters 5, 9, 10
    url: https://forallx.openlogicproject.org/html/
    note: Chapter 5「Connectives」、Chapter 9「Characteristic truth tables」、Chapter 10 §10.1。五つの結合子、真理表、真理関数性の説明を確認。
status: draft
---

## 説明

**命題**は、真か偽かのどちらかが定まる文です。「$2$ は偶数である」は真の命題であり、「$2$ は奇数である」は偽の命題です。一方、「$x$ は偶数である」は、$x$ が何を表すかを決めるまでは命題になりません。

一つの命題を $P$、別の命題を $Q$ とします。**論理結合子**を使うと、二つの命題から新しい命題を作れます。

| 記号 | 読み方 | 真になる条件 |
| --- | --- | --- |
| $\neg P$ | $P$ ではない | $P$ が偽 |
| $P\land Q$ | $P$ かつ $Q$ | 両方が真 |
| $P\lor Q$ | $P$ または $Q$ | 少なくとも一方が真 |
| $P\Rightarrow Q$ | $P$ ならば $Q$ | $P$ が真で $Q$ が偽、という場合以外 |
| $P\Leftrightarrow Q$ | $P$ と $Q$ は同値 | 二つの真偽が一致 |

数学の「または」$\lor$ は、両方が真の場合も含みます。「どちらか一方だけ」を表したいときは、その条件を別に加えます。

### ならばの意味

$P\Rightarrow Q$ が偽になるのは、$P$ が真なのに $Q$ が偽である場合だけです。このため、$P$ が偽なら $P\Rightarrow Q$ は真と定めます。これは日常語の因果関係ではなく、二つの真理値の組合せを表す**実質含意**です。

$$
P\Rightarrow Q
\quad\Longleftrightarrow\quad
\neg P\lor Q
$$

### 括弧と作用範囲

結合子を重ねるときは、どこまでを組み合わせるかを括弧で示します。

$$
\neg(P\land Q)
\qquad\text{と}\qquad
(\neg P)\land Q
$$

左は「$P$ と $Q$ が両方とも真、というわけではない」、右は「$P$ は偽で、$Q$ は真」という意味です。括弧が違えば命題の意味も変わります。

:::callout{type="important" title="この記事で採用する論理"}
ここでは、各命題が真または偽のどちらか一方になる**古典二値論理**を使います。直観主義論理、多値論理、様相論理などでは、記号の扱いや認める推論が異なることがあります。それらは、この公理記事群を読むための最小範囲には含めません。
:::

## 例題

### 例題 1：複合命題の真偽

**問題**

$P$ を「$8$ は偶数である」、$Q$ を「$8$ は奇数である」とします。$P\land\neg Q$ の真偽を答えてください。

**考え方**

$P$ と $Q$ の真偽を先に決め、内側の否定から順に読みます。

:::details{summary="解答を見る"}
$P$ は真、$Q$ は偽なので、$\neg Q$ は真です。したがって、

$$
P\land\neg Q
$$

は真です。
:::

### 例題 2：「または」の境界

**問題**

$P$ と $Q$ がともに真であるとき、$P\lor Q$ は真ですか。

**考え方**

数学の $\lor$ が「少なくとも一方」と「一方だけ」のどちらを表すかを確認します。

:::details{summary="解答を見る"}
真です。$P\lor Q$ は少なくとも一方が真なら真なので、両方が真の場合も含みます。「一方だけが真」とは限りません。
:::
