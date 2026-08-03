---
locale: ja
title: 3桁・4桁の引き算
summary: 3桁や4桁の引き算は、同じ位どうしを引き、足りないときは一つ上の位を十個のまとまりに直して計算します。
readingLevel:
  curriculum: jp-mext-2017
  grade: 3
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）』
    url: https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
    note: 算数〔第3学年〕A(2)、pp.71-72。3位数・4位数の減法と筆算を確認。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第3節 A(2)「加法、減法」、pp.138-141。十進位取りに基づく計算方法を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

$3$ :ruby[桁]{reading="けた"}や $4$ :ruby[桁]{reading="けた"}の引き算でも、:ruby[同じ位]{reading="おなじくらい" strong="true"}どうしを引きます。その:ruby[位]{reading="くらい"}だけでは引けないときは、一つ上の:ruby[位]{reading="くらい"}の $1$ を、今の:ruby[位]{reading="くらい"}の $10$ に:ruby[繰り下げます]{reading="くりさげます"}。

::interactive[603から278を引く位取りを見る]{kind="place-value-board" mode="regroup-subtract" value="603" second="278" max="9999" captionReading="ひ|くらいど|み"}

たとえば $734-286$ の一の:ruby[位]{reading="くらい"}では、$4$ から $6$ を引けません。十の:ruby[位]{reading="くらい"}の $1$ 十を $10$ 一に直すと、$14-6$ を計算できます。

$$
734-286=448
$$

:::callout{type="important" title="0をまたぐ繰り下がり" titleReading="0をまたぐくりさがり"}
$1000-468$ では、千を百、百を十、十を一へ:ruby[順に]{reading="じゅんに"}分け直します。:ruby[途中]{reading="とちゅう"}の $0$ を:ruby[飛ばさず]{reading="とばさず"}、どの:ruby[位]{reading="くらい"}のまとまりを直したか:ruby[確かめます]{reading="たしかめます"}。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[差]{reading="さ"}を足し算で:ruby[確かめる]{reading="たしかめる"}

:ruby[問題]{reading="もんだい" strong="true"}

$902-475$ を計算し、答えを:ruby[確かめて]{reading="たしかめて"}ください。

:ruby[考え方]{reading="かんがえかた" strong="true"}

引き算をした後で、:ruby[差]{reading="さ"}と引いた数を足します。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$$
902-475=427
$$

$427+475=902$ となるので、計算を:ruby[確かめられます]{reading="たしかめられます"}。
:::
