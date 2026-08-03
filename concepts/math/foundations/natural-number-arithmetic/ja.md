---
locale: ja
title: 自然数の演算を支える法則
summary: 自然数の加法と乗法は0と後者を使って定められ、交換・結合・分配などの計算法則が導かれます。
sources:
  - title: Richard Dedekind, Essays on the Theory of Numbers
    url: https://www.gutenberg.org/ebooks/21016
    note: Part II §§9–12。帰納による写像の定義、自然数の加法と乗法の構成を参照。
  - title: Encyclopedia of Mathematics, “Peano axioms”
    url: https://encyclopediaofmath.org/wiki/Peano_axioms
    note: 本文「The Peano axioms as used in first-order logic」の加法・乗法を含む公理一覧と、その直後の帰納法の公理図式。一階Peano算術の再帰式と帰納法を参照。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第2章「A 数と計算」および第3章第2～3学年。加法・乗法の交換法則、結合法則、分配法則の教育上の扱いを参照。
status: draft
---

## 説明

自然数の**加法**と**乗法**は、$0$ と後者 $S(n)$ に対する規則から順に定められます。その規則と数学的帰納法から、ふだん使う計算法則を証明できます。

### 加法と乗法の定義

一方の数について再帰的に、加法を

$$
\begin{aligned}
a+0&=a,\\
a+S(b)&=S(a+b)
\end{aligned}
$$

と定めます。乗法は

$$
\begin{aligned}
a\times0&=0,\\
a\times S(b)&=(a\times b)+a
\end{aligned}
$$

と定めます。二つ目の式は、$a$ を掛ける回数が一つ増えると積に $a$ を一つ加える、という意味です。

### 導かれる計算法則

自然数 $a,b,c$ に対して、次が成り立ちます。

$$
\begin{aligned}
a+b&=b+a &&\text{交換法則},\\
(a+b)+c&=a+(b+c) &&\text{結合法則},\\
a\times b&=b\times a &&\text{交換法則},\\
(a\times b)\times c&=a\times(b\times c) &&\text{結合法則},\\
a\times(b+c)&=a\times b+a\times c &&\text{分配法則}.
\end{aligned}
$$

::interactive[数の並べ方や分け方を変えて、乗法の法則を確かめる]{kind="equation-balance" mode="properties" operation="multiply" value="3" second="4" selected="2" max="20" captionReading="かず|なら|かた|わ|かた|か|じょうほう|ほうそく|たし"}

$0$ は加法の**単位元**、$1$ は乗法の単位元です。また、$0$ を掛けると積は $0$ になります。

$$
a+0=a,\qquad a\times1=a,\qquad a\times0=0
$$

:::callout{type="important" title="公理と定理を区別します"}
Peanoの公理から加法・乗法を上のように定義した場合、交換法則や分配法則は証明される**定理**です。一方、より一般の代数的構造を定義するときには、同じ式を公理として採用する場合があります。
:::

:::details{summary="交換法則を帰納法で証明する見通し" summaryReading="こうかんほうそく|きのうほう|しょうめい|みとお"}
$a+b=b+a$ を $b$ について証明します。まず $b=0$ の場合は、定義から $a+0=a$ です。反対向きの $0+a=a$ は、$a$ についての帰納法で先に証明できます。

$a+b=b+a$ が成り立つと仮定すると、

$$
\begin{aligned}
a+S(b)&=S(a+b)\\
&=S(b+a)\\
&=S(b)+a
\end{aligned}
$$

となります。最後の等号には、後者と加法の関係を表す補助定理を使います。これで $b$ の次の数でも交換法則が成り立つため、帰納法によりすべての自然数 $b$ で成り立ちます。
:::

### 減法と除法の注意

加法と乗法は、どの二つの自然数に対しても結果が自然数になります。しかし、減法と除法はそうとは限りません。

$$
2-5\notin\mathbb{N},\qquad 5\div2\notin\mathbb{N}
$$

自然数の範囲で除法を行うときは、割り切れる場合を扱うか、商と余りの組で表します。

## 例題

### 例題 1：分配法則で計算する

**問題**

$7\times13$ を、$13=10+3$ と分けて計算してください。

**考え方**

分配法則 $a(b+c)=ab+ac$ を使います。

:::details{summary="解答を見る" summaryReading="かいとう|み"}

$$
\begin{aligned}
7\times13
&=7\times(10+3)\\
&=7\times10+7\times3\\
&=70+21\\
&=91
\end{aligned}
$$
:::

### 例題 2：自然数の中で閉じているか

**問題**

加法、乗法、減法のうち、どの二つの自然数を選んでも答えが自然数になるものはどれですか。

**考え方**

それぞれについて、答えが自然数にならない反例があるかを調べます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
加法と乗法です。減法では、たとえば $2-5$ が自然数になりません。「いくつからいくつを引くか」という条件を付けなければ、自然数の中だけでいつも計算できる演算ではありません。
:::
