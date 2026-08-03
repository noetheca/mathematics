---
locale: ja
title: Peanoの公理
summary: Peanoの公理は、0と「次の数」という仕組みを使って自然数の基本構造を定める公理群です。
sources:
  - title: Giuseppe Peano, Arithmetices principia, nova methodo exposita
    url: https://archive.org/details/arithmeticespri00peangoog
    note: 本文冒頭の公理 P1–P9。原著が1を最初の数とすることと、等号を含む歴史的な定式化を参照。
  - title: Encyclopedia of Mathematics, “Peano axioms”
    url: https://encyclopediaofmath.org/wiki/Peano_axioms
    note: 本文冒頭の5項目と、続く「The Peano axioms as used in first-order logic」の段落。現代的な0始まりの5公理、二階の帰納法、加法・乗法を加えた一階Peano算術を参照。
  - title: Richard Dedekind, Essays on the Theory of Numbers
    url: https://www.gutenberg.org/ebooks/21016
    note: Part II §§6, 9–10。単純無限系、帰納法、再帰による写像の定義を参照。
status: draft
---

## 説明

Peanoの:ruby[公理]{reading="こうり" strong="true"}は、自然数を $0$ と「次の数」を与える操作から特徴付ける公理群です。次の数を与える操作を $S$ と書き、$S(n)$ を $n$ の**後者**と呼びます。

### 現代的な五つの公理

現代的な $0$ 始まりの形では、自然数全体を $\mathbb{N}$ として次を採用します。

1. $0$ は自然数です。
2. 自然数 $n$ の後者 $S(n)$ も自然数です。
3. どの自然数 $n$ に対しても、$S(n)\neq0$ です。
4. $S(m)=S(n)$ ならば $m=n$ です。
5. $0$ で成り立ち、$n$ で成り立つなら $S(n)$ でも成り立つ性質は、すべての自然数で成り立ちます。

五つ目は**数学的帰納法の原理**です。有限個の例を見ただけで一般化するのではなく、出発点と「次へ進めること」の両方を証明します。

$$
P(0)\ \land\
\forall n\bigl(P(n)\Rightarrow P(S(n))\bigr)
\Longrightarrow
\forall n\,P(n)
$$

:::callout{type="important" title="公理が定めるもの"}
これらの公理は、数字の字形を定めるものではありません。$0$ と後者がどのような関係を満たすかを定め、その関係を満たす構造を自然数の構造として扱います。
:::

### 各公理の役割

三つ目は、後者をたどって $0$ に戻る輪がないことを保証します。四つ目は、異なる数が同じ後者へ合流しないことを保証します。五つ目は、$0$ から後者を繰り返して得られるもの以外を除きます。

:::details{summary="原著と一階Peano算術との違い" summaryReading="げんちょといっかいPeanoさんじゅつとのちがい"}
Peanoの西暦 $1889$ 年の原著は $1$ を最初の自然数とし、等号に関する規則も含む九つの公理を掲げました。現在「Peanoの公理」として紹介される五公理は、後世に整理された形です。

上の五つ目を、あらゆる部分集合について述べると二階の公理になります。一階述語論理だけで書くPeano算術では、書ける性質 $P$ ごとに帰納法の公理を一つずつ置く**公理図式**を使います。この二つは形式的には同じ体系ではありません。
:::

## 例題

### 例題 1：後者で数を表す

**問題**

$1=S(0)$ と約束するとき、$2$ と $3$ を $0$ と $S$ だけで表してください。

**考え方**

「次の数」を一回進むたびに $S$ を一つ外側へ付けます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}

$$
2=S(S(0)),\qquad 3=S(S(S(0)))
$$

です。これは数字の計算というより、自然数列を作る構造を表しています。
:::

### 例題 2：公理を一つ外した構造

**問題**

$0$ と $1$ だけがあり、$S(0)=1$、$S(1)=0$ とする構造は、三つ目の公理を満たしますか。

**考え方**

三つ目の公理「どの自然数の後者も $0$ ではない」に、$n=1$ を当てはめます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$S(1)=0$ なので、「どの自然数の後者も $0$ ではない」という三つ目の公理を満たしません。この例は、三つ目の公理が後者の輪を排除する役割を持つことを示します。
:::
