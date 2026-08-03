---
locale: ja
title: 乗法九九
summary: 乗法九九は、1から9までの数どうしの積を、まとまりの増え方と結び付けて整理したものです。
readingLevel:
  curriculum: jp-mext-2017
  grade: 2
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第2学年 A(3)「乗法」pp.113–118。乗法九九を構成し、乗数が1増えると積が被乗数分だけ増える性質や交換法則を活用する扱いを確認。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[乗法九九]{reading="じょうほうくく" strong="true"}は、$1$ から $9$ までの:ruby[数]{reading="かず"}どうしの:ruby[積]{reading="せき"}を:ruby[整理]{reading="せいり"}したものです。:ruby[算数]{reading="さんすう"}では「九九」ともいいます。

::interactive[九九をおはじきの配列で見る]{kind="counter-mat" mode="multiply" value="6" second="4" max="9" captionReading="くく|はいれつ|み"}

### :ruby[前]{reading="まえ"}の:ruby[積]{reading="せき"}から:ruby[作]{reading="つく"}る

:ruby[同]{reading="おな"}じ:ruby[数]{reading="かず"}のまとまりが:ruby[一]{reading="ひと"}つふえると、:ruby[積]{reading="せき"}はその:ruby[数]{reading="かず"}だけふえます。

$$
a\times(b+1)=a\times b+a
$$

たとえば $6$ の:ruby[段]{reading="だん"}は、$6$ ずつふえます。

$$
6,12,18,24,30,36,42,48,54
$$

:ruby[九九]{reading="くく"}は:ruby[答]{reading="こた"}えを:ruby[覚]{reading="おぼ"}えるだけでなく、:ruby[同]{reading="おな"}じ:ruby[大]{reading="おお"}きさのまとまりを:ruby[一]{reading="ひと"}つずつ:ruby[足]{reading="た"}して:ruby[作]{reading="つく"}れます。

### :ruby[段]{reading="だん"}どうしを:ruby[結]{reading="むす"}ぶ

$7\times6$ を:ruby[忘]{reading="わす"}れても、$7\times5=35$ に $7$ を:ruby[足]{reading="た"}せば:ruby[求]{reading="もと"}められます。

$$
7\times6=7\times5+7=35+7=42
$$

また、$7\times6$ と $6\times7$ の:ruby[積]{reading="せき"}は:ruby[同]{reading="おな"}じです。この:ruby[交換]{reading="こうかん"}の:ruby[性質]{reading="せいしつ"}は、:ruby[計算]{reading="けいさん"}の:ruby[確]{reading="たし"}かめにも:ruby[使]{reading="つか"}えます。

:::callout{type="note" title="0の計算もつながっています" titleReading="0のけいさんもつながっています"}
:ruby[一]{reading="ひと"}つもまとまりがないとき、:ruby[積]{reading="せき"}は $0$ です。したがって $a\times0=0$ です。これは:ruby[九九]{reading="くく"}の:ruby[外]{reading="そと"}にある:ruby[特別]{reading="とくべつ"}な:ruby[暗記]{reading="あんき"}ではなく、:ruby[乗法]{reading="じょうほう"}の:ruby[意味]{reading="いみ"}から:ruby[分]{reading="わ"}かります。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[知]{reading="し"}っている:ruby[積]{reading="せき"}から:ruby[求]{reading="もと"}める

:ruby[問題]{reading="もんだい" strong="true"}

$8\times7$ を、$8\times6=48$ を:ruby[使]{reading="つか"}って:ruby[求]{reading="もと"}めてください。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$8$ のまとまりが:ruby[一]{reading="ひと"}つふえるので、$8$ を:ruby[足]{reading="た"}します。

:::details{summary="解答を見る" summaryReading="かいとう|み"}

$$
8\times7=8\times6+8=48+8=56
$$
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[式]{reading="しき"}の:ruby[読]{reading="よ"}み:ruby[違]{reading="ちが"}い

:ruby[問題]{reading="もんだい" strong="true"}

$5\times4$ を「$5+4$」として:ruby[計算]{reading="けいさん"}してよいですか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$5\times4$ は $5$ のまとまりが $4$ :ruby[個分]{reading="こぶん"}あることを:ruby[表]{reading="あらわ"}します。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
よくありません。$5\times4$ は

$$
5+5+5+5=20
$$

です。$5+4=9$ とは:ruby[意味]{reading="いみ"}も:ruby[答]{reading="こた"}えも:ruby[違]{reading="ちが"}います。
:::
