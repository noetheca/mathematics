---
locale: ja
title: 数学的帰納法
summary: 数学的帰納法は、最初の自然数で成り立つことと、ある自然数から次の自然数へ成り立ち方を引き継げることを示して、すべての自然数について証明する方法です。
sources:
  - title: Open Logic Project, Open Logic Sample
    url: https://builds.openlogicproject.org/courses/sample/open-logic-sample.pdf
    note: Part V Appendix B §§B.1–B.3, pp.325–328。自然数上の帰納法、帰納法の仮定、強い帰納法の標準的な定式化を確認。
  - title: Richard Hammack, Book of Proof, Third Edition
    url: https://richardhammack.github.io/BookOfProof/Main.pdf
    note: Chapter 10 §§10.1–10.3, pp.180–190。通常の数学的帰納法、強い帰納法、最小反例による証明の構成を確認。
  - title: Open Logic Project, The Open Logic Text, Complete Build
    url: https://builds.openlogicproject.org/open-logic-complete.pdf
    note: Part I Chapter 6 §6.3, pp.99–100。自然数についての算術的帰納法と、基底・帰納段階の役割を確認。
status: draft
---

## 説明

**数学的帰納法**は、自然数 $n$ についての性質 $P(n)$ を、すべての自然数で証明する方法です。このサイトでは $0$ を自然数に含めるので、次の二段階を示します。

1. **基底**：$P(0)$ が成り立つことを示します。
2. **帰納段階**：任意の自然数 $k$ について、$P(k)$ が成り立つと仮定し、$P(S(k))$ が成り立つことを示します。

この二つから、すべての自然数 $n$ について $P(n)$ が成り立ちます。

$$
P(0)\land
\forall k\bigl(P(k)\Rightarrow P(S(k))\bigr)
\Longrightarrow
\forall n\,P(n)
$$

### 帰納法の仮定

帰納段階で一時的に仮定する $P(k)$ を**帰納法の仮定**といいます。この仮定は、すでにすべての場合を認めることではありません。「ある任意の $k$ で成り立つなら、その次へ進める」と示すために使います。

基底だけでは $0$ の場合しか分かりません。帰納段階だけでも、最初に成り立つ場所がなければ連鎖を始められません。**基底と帰納段階の両方**が必要です。

### 公理との関係

数学的帰納法を証明方法として使える理由をどこに置くかは、採用する基礎付けによって異なります。Peanoの公理では帰納法の原理を公理として置きます。一階Peano算術では、書ける性質 $P$ ごとに帰納法の公理を置く公理図式を使います。

この記事では、Peanoの公理を読む前に形と使い方を理解できるよう、帰納法を**証明原理として先に説明**しています。これがPeanoの公理から独立に証明済みだと主張しているわけではありません。

:::callout{type="important" title="この記事での範囲"}
ここでは $0,1,2,\ldots$ 上の通常の帰納法を扱います。強い帰納法には触れるだけとし、整礎帰納法、構造帰納法、超限帰納法は今回の形式的読解の前提には含めません。
:::

## 例題

### 例題 1：再帰的な演算の性質

**問題**

自然数上の演算 $\oplus$ を、

$$
a\oplus0=a,
\qquad
a\oplus S(n)=S(a\oplus n)
$$

と定めます。すべての自然数 $n$ について $0\oplus n=n$ であることを、数学的帰納法で証明してください。

**考え方**

$P(n)$ を $0\oplus n=n$ とし、$n=0$ と $n=S(k)$ の場合を定義に沿って調べます。

:::details{summary="解答を見る"}
基底では、演算の定義から

$$
0\oplus0=0
$$

です。次に $0\oplus k=k$ と仮定します。すると、

$$
\begin{aligned}
0\oplus S(k)
&=S(0\oplus k)\\
&=S(k)
\end{aligned}
$$

です。したがって、帰納段階も成り立ちます。数学的帰納法により、すべての自然数 $n$ について $0\oplus n=n$ です。
:::

### 例題 2：不十分な帰納段階

**問題**

ある主張の証明で、$P(0)$ を示した後、「$P(S(k))$ を仮定すれば $P(S(k))$ は成り立つ」と書きました。これは正しい帰納段階ですか。

**考え方**

帰納段階で仮定してよい命題と、証明すべき命題を区別します。

:::details{summary="解答を見る"}
正しい帰納段階ではありません。仮定してよいのは $P(k)$ であり、そこから $P(S(k))$ を導く必要があります。

$P(S(k))$ 自体を仮定して同じ命題を結論にするだけでは、$k$ から次へ性質が引き継がれることを示していません。
:::
