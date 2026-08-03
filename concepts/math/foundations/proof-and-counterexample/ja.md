---
locale: ja
title: 証明と反例
summary: 証明は前提から結論を正当な推論で導く説明であり、反例は一般的な主張が成り立たない一つの例です。
sources:
  - title: Richard Hammack, Book of Proof, Third Edition
    url: https://richardhammack.github.io/BookOfProof/Main.pdf
    note: Chapter 4 §§4.1–4.3、Chapter 6 §§6.1–6.2、Chapter 9 §§9.1–9.3。定理と定義、直接証明、背理法、全称命題を反例で否定する方法を確認。
  - title: Open Logic Project, Open Logic Sample
    url: https://builds.openlogicproject.org/courses/sample/open-logic-sample.pdf
    note: Part V Appendix A §§A.1–A.8, pp.303–320。証明の開始、定義の使用、推論形式、背理法、証明の読解を確認。
  - title: Open Logic Project, The Open Logic Text, Complete Build
    url: https://builds.openlogicproject.org/open-logic-complete.pdf
    note: Part II Chapter 7 §7.6、Chapter 9 §§9.1, 9.6–9.9, pp.113–135。意味論的帰結、導出可能性、健全性という区別を確認。
status: draft
---

## 説明

**証明**は、定義、公理、前提、すでに証明された結果を使い、認められた推論に従って結論までつなぐ説明です。いくつかの例で正しそうに見えることと、すべての場合に正しいことを示す証明は区別します。

証明では、まず主張の形を確認します。

- $P\Rightarrow Q$ を直接証明するなら、$P$ を仮定して $Q$ を導きます。
- $P\Leftrightarrow Q$ なら、$P\Rightarrow Q$ と $Q\Rightarrow P$ の両方向を示します。
- $\exists x\,P(x)$ なら、条件を満たす対象を一つ示す**構成的な証明**ができます。
- $\forall x\,P(x)$ なら、任意の対象で成り立つ理由を示します。

### よく使う証明方法

**直接証明**は、前提から定義や既知の定理を順に適用して結論を導きます。**対偶による証明**は、$P\Rightarrow Q$ と同値な $\neg Q\Rightarrow\neg P$ を証明します。**背理法**は、結論の否定を仮定し、矛盾を導きます。

どの方法でも、使った前提と各段階の根拠が追えることが必要です。図や計算例は発想を助けますが、それだけで一般的な結論を保証するとは限りません。

### 反例

**反例**は、全称命題 $\forall x\,P(x)$ に対して $P(x)$ が偽になる具体的な対象です。

$$
\neg\forall x\,P(x)
\Leftrightarrow
\exists x\,\neg P(x)
$$

一つの反例で全称命題を否定できます。一方、何個かの例で $P(x)$ が真だっただけでは、全称命題の証明にはなりません。

### 導出とモデル

前提の集まりを $\Gamma$、結論を $\varphi$ とすると、形式体系の規則で $\varphi$ を導出できることを

$$
\Gamma\vdash\varphi
$$

と書きます。$\Gamma$ を満たすすべてのモデルで $\varphi$ が真になることは

$$
\Gamma\models\varphi
$$

と書きます。前者は証明規則に関する概念、後者は意味とモデルに関する概念です。公理体系を読むときは、この二つを混同しません。

:::callout{type="note" title="この記事で扱わない証明論"}
ここでは、通常の数学文を読み書きするための証明と反例を扱います。特定の自然演繹体系やシークエント計算の完全な規則、健全性・完全性・無矛盾性のメタ定理までは前提にしません。
:::

## 例題

### 例題 1：部分集合の推移性を証明する

**問題**

$A\subseteq B$ かつ $B\subseteq C$ ならば $A\subseteq C$ であることを証明してください。

**考え方**

$A$ の任意の要素を一つ取り、部分集合の定義を二回使います。

:::details{summary="解答を見る"}
$x\in A$ とします。$A\subseteq B$ なので $x\in B$ です。さらに $B\subseteq C$ なので $x\in C$ です。

これは $A$ のどの要素 $x$ に対しても成り立つため、$A\subseteq C$ です。
:::

### 例題 2：逆向きの主張を反例で否定する

**問題**

「$A\subseteq B$ ならば $B\subseteq A$ である」という主張を反例で否定してください。

**考え方**

$A$ の要素をすべて含み、さらに別の要素も含む集合 $B$ を選びます。

:::details{summary="解答を見る"}

$$
A=\{1\},
\qquad
B=\{1,2\}
$$

とします。$A\subseteq B$ は成り立ちますが、$2\in B$ かつ $2\notin A$ なので $B\subseteq A$ は成り立ちません。したがって、この組は反例です。
:::
