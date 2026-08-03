---
locale: ja
title: 述語と量化記号
summary: 述語は対象についての性質や関係を表し、全称量化記号と存在量化記号はその性質がすべての対象または少なくとも一つの対象で成り立つことを表します。
sources:
  - title: forall x Calgary, Chapter 23 Building blocks of FOL
    url: https://forallx.openlogicproject.org/html/Ch23.html
    note: §§23.3–23.5。述語、全称・存在量化記号、変数、量化の範囲となる領域の説明を確認。
  - title: forall x Calgary, Chapter 24 Sentences with one quantifier
    url: https://forallx.openlogicproject.org/html/Ch24.html
    note: §§24.1–24.5。全称文と存在文の記号化、空の述語、領域の選択、量化記号の作用範囲を確認。
  - title: Open Logic Project, The Open Logic Text, Complete Build
    url: https://builds.openlogicproject.org/open-logic-complete.pdf
    note: Part III Chapter 14 §§14.1–14.8, pp.197–205、Chapter 15 §§15.2–15.3, pp.207–212。第一階論理の言語、項・論理式、充足、構造とモデルを確認。
status: draft
---

## 説明

**述語**は、対象の性質や対象どうしの関係を表す、空所のある文です。たとえば自然数を考えるとき、

$$
P(x):\quad x\text{ は偶数である}
$$

は一変数の述語です。$x$ に $4$ を代入した $P(4)$ は真偽が定まる命題ですが、$P(x)$ のままでは $x$ の値によって真偽が変わります。

二つの対象の関係は、二変数の述語で表せます。

$$
L(x,y):\quad x<y
$$

### 領域

変数が動く対象全体を**領域**といいます。同じ式でも、領域が自然数か整数かで真偽が変わることがあります。量化記号を読むときは、何について「すべて」「存在する」と述べているかを先に確認します。

### 全称量化と存在量化

**全称量化記号** $\forall$ は「領域のすべての対象について」、**存在量化記号** $\exists$ は「領域に少なくとも一つある」を表します。

$$
\forall x\,P(x)
\qquad\text{すべての }x\text{ で }P(x)\text{ が成り立つ},
$$

$$
\exists x\,P(x)
\qquad\text{ある }x\text{ で }P(x)\text{ が成り立つ}.
$$

集合 $A$ に範囲を限定する記法では、

$$
\forall x\in A\,P(x),
\qquad
\exists x\in A\,P(x)
$$

と書きます。厳密な第一階論理では、これらはそれぞれ $\forall x(x\in A\Rightarrow P(x))$ と $\exists x(x\in A\land P(x))$ の省略として扱えます。

### 否定と量化記号

「すべてで成り立つわけではない」は、「成り立たないものが少なくとも一つある」と同値です。

$$
\neg\forall x\,P(x)
\Leftrightarrow
\exists x\,\neg P(x)
$$

同様に、「一つも存在しない」は「すべてで成り立たない」と同値です。

$$
\neg\exists x\,P(x)
\Leftrightarrow
\forall x\,\neg P(x)
$$

量化記号が二つ以上あるときは順序も重要です。たとえば $\forall x\exists y\,L(x,y)$ は、各 $x$ に応じて別の $y$ を選んでもよい文です。$\exists y\forall x\,L(x,y)$ は、すべての $x$ に対して使える一つの $y$ が必要で、一般には同じ意味ではありません。

:::callout{type="important" title="この記事での形式化の範囲"}
ここでは、対象を一つずつ量化する**第一階論理に沿った記法**を、公理を読むための範囲で扱います。述語そのものやすべての部分集合を変数として量化する二階論理、型理論、モデル理論の完全性などは扱いません。
:::

## 例題

### 例題 1：全称文と存在文

**問題**

領域を自然数、$P(x)$ を「$x$ は $0$ 以上である」とします。$\forall x\,P(x)$ と $\exists x\,\neg P(x)$ の真偽を答えてください。

**考え方**

自然数の範囲で、$0$ 未満の数があるかを確認します。

:::details{summary="解答を見る"}
すべての自然数は $0$ 以上なので、$\forall x\,P(x)$ は真です。$P(x)$ が成り立たない自然数はないため、$\exists x\,\neg P(x)$ は偽です。
:::

### 例題 2：「すべてではない」の否定

**問題**

集合 $A=\{1,2,3\}$ 上で、$E(x)$ を「$x$ は偶数である」とします。$\neg\forall x\in A\,E(x)$ を、存在量化記号を使って書き換え、具体例も示してください。

**考え方**

全称量化の否定を、否定を満たす要素の存在へ移します。

:::details{summary="解答を見る"}

$$
\neg\forall x\in A\,E(x)
\Leftrightarrow
\exists x\in A\,\neg E(x)
$$

です。実際、$1\in A$ であり、$1$ は偶数ではありません。したがって右辺は真で、左辺も真です。
:::
