---
locale: ja
title: 九九の範囲を超える簡単な乗法
summary: 10より大きい数の簡単な掛け算も、十のまとまりと一のまとまりへ分け、九九を組み合わせて計算できます。
readingLevel:
  curriculum: jp-mext-2017
  grade: 2
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第2学年 A(3)「乗法」pp.113–118、特に「簡単な場合について、2位数と1位数との乗法」。累加や十のまとまり、既習の九九を基に計算する扱いを確認。
status: draft
---

## :ruby[説明]{reading="せつめい"}

$10$ より:ruby[大]{reading="おお"}きい:ruby[数]{reading="かず"}をかける:ruby[簡単]{reading="かんたん"}な:ruby[計算]{reading="けいさん"}も、:ruby[十]{reading="じゅう"}のまとまりと:ruby[一]{reading="いち"}のまとまりに:ruby[分]{reading="わ"}けると、:ruby[九九]{reading="くく"}を:ruby[使]{reading="つか"}って:ruby[求]{reading="もと"}められます。

::interactive[12を位に分けて掛ける]{kind="place-value-board" mode="multiply" value="12" second="3" max="99" captionReading="くらい|わ|か"}

### :ruby[十]{reading="じゅう"}のまとまりをかける

$20\times4$ は、「$10$ が $2$ :ruby[個]{reading="こ"}」のまとまりが $4$ :ruby[個分]{reading="こぶん"}です。$2\times4=8$ なので、$10$ が $8$ :ruby[個]{reading="こ"}あります。

$$
20\times4=80
$$

### :ruby[十]{reading="じゅう"}と:ruby[一]{reading="いち"}に:ruby[分]{reading="わ"}ける

$12\times3$ では、$12$ を $10+2$ と:ruby[見]{reading="み"}ます。

$$
\begin{aligned}
12\times3
&=(10+2)\times3\\
&=10\times3+2\times3\\
&=30+6\\
&=36
\end{aligned}
$$

:ruby[後]{reading="あと"}の:ruby[学年]{reading="がくねん"}では、この:ruby[分]{reading="わ"}け:ruby[方]{reading="かた"}を:ruby[分配法則]{reading="ぶんぱいほうそく"}として:ruby[整理]{reading="せいり"}します。

:::callout{type="warning" title="数字だけを別々にかけません" titleReading="すうじだけをべつべつにかけません"}
$12$ の $1$ は $1$ ではなく $10$ を:ruby[表]{reading="あらわ"}します。$1\times3$ と $2\times3$ を:ruby[足]{reading="た"}すのではなく、$10\times3$ と $2\times3$ を:ruby[足]{reading="た"}します。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：$14\times3$

:ruby[問題]{reading="もんだい" strong="true"}

$14\times3$ を、$14=10+4$ と:ruby[分]{reading="わ"}けて:ruby[計算]{reading="けいさん"}してください。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$10$ のまとまりと $4$ のまとまりを、それぞれ $3$ :ruby[個分]{reading="こぶん"}:ruby[求]{reading="もと"}めます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}

$$
14\times3=10\times3+4\times3=30+12=42
$$
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[足]{reading="た"}すだけではない

:ruby[問題]{reading="もんだい" strong="true"}

「$12\times3=12+3=15$」という:ruby[計算]{reading="けいさん"}は:ruby[正]{reading="ただ"}しいですか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$12\times3$ を「$12$ ずつのまとまりが $3$ :ruby[個分]{reading="こぶん"}」と:ruby[読]{reading="よ"}みます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[正]{reading="ただ"}しくありません。

$$
12\times3=12+12+12=36
$$

$12+3$ は、$12$ のまとまりを $3$ :ruby[個分]{reading="こぶん"}にする:ruby[計算]{reading="けいさん"}ではありません。
:::
