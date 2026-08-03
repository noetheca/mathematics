---
locale: ja
title: 何桁かの数のかけ算
summary: 何桁かの数のかけ算は、数を位ごとのまとまりに分け、九九で求めた積を足し合わせて計算します。
readingLevel:
  curriculum: jp-mext-2017
  grade: 3
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）』
    url: https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
    note: 算数〔第3学年〕A(3)、p.72。2位数・3位数に1位数・2位数をかける乗法と筆算を確認。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第3節 A(3)「乗法」、pp.141-145。位ごとの分解と分配法則に基づく計算を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[何桁かの数のかけ算]{reading="なんけたかのかずのかけざん" strong="true"}は、かけられる数やかける数を:ruby[位]{reading="くらい"}ごとに分けると、九九を使って計算できます。

::interactive[23に4を掛ける位取りを見る]{kind="place-value-board" mode="multiply" value="23" second="4" max="9999" captionReading="か|くらいど|み"}

たとえば、

$$
\begin{aligned}
23\times45
&=23\times(40+5)\\
&=23\times40+23\times5\\
&=920+115\\
&=1035
\end{aligned}
$$

です。筆算の二:ruby[段目]{reading="だんめ"}を一つ左から書くのは、$4$ が $4$ ではなく $40$ を表すためです。

:::callout{type="warning" title="0を付けるだけではありません" titleReading="0をつけるだけではありません"}
$23\times40$ を $23\times4$ の右に $0$ を:ruby[付けて]{reading="つけて"}:ruby[求められる]{reading="もとめられる"}のは、$40=4\times10$ だからです。:ruby[位取り]{reading="くらいどり"}の理由と:ruby[結び付けます]{reading="むすびつけます"}。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：$3$ :ruby[桁]{reading="けた"}に $1$ :ruby[桁]{reading="けた"}をかける

:ruby[問題]{reading="もんだい" strong="true"}

$312\times4$ を計算してください。

:ruby[考え方]{reading="かんがえかた" strong="true"}

$312$ を $300+10+2$ に分けます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$$
\begin{aligned}
312\times4
&=300\times4+10\times4+2\times4\\
&=1200+40+8\\
&=1248
\end{aligned}
$$
:::
