---
locale: ja
title: 点・直線・平面
summary: 点・直線・平面は、位置、まっすぐな広がり、平らな広がりを表す幾何の基本的な対象です。
readingLevel:
  curriculum: jp-mext-2017
  grade: 2
sources:
  - title: David Hilbert, Foundations of Geometry（Trinity College Dublin 対訳）
    url: https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/MA232A_Mich2017/HilbertAxioms_ParallelText.html
    note: Chapter I §§1–2。点・直線・平面を原始的対象として置くことと、接続公理を参照。
  - title: Euclid’s Elements, Book I（Clark University）
    url: https://mathcs.clarku.edu/~djoyce/java/elements/bookI/bookI.html
    note: Definitions 1–7 および Guide。点・線・面の古典的説明と、最初の語が原始語として働くという解説を参照。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第2章「B 図形」および第3章第2学年。直線、辺、面など図形を構成する要素の扱いを参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[点]{reading="てん" strong="true"}、:ruby[直線]{reading="ちょくせん" strong="true"}、:ruby[平面]{reading="へいめん" strong="true"}は、:ruby[幾何]{reading="きか"}で:ruby[形]{reading="かたち"}や:ruby[位置]{reading="いち"}を:ruby[考]{reading="かんが"}えるための:ruby[基本的]{reading="きほんてき"}な:ruby[対象]{reading="たいしょう"}です。これらは、より:ruby[前]{reading="まえ"}の:ruby[幾何用語]{reading="きかようご"}だけでは:ruby[定義]{reading="ていぎ"}しない:ruby[原始概念]{reading="げんしがいねん"}として:ruby[扱]{reading="あつか"}えます。

::interactive[二つの点の位置と間隔を変えて、二点を通る直線を確かめる]{kind="geometry-lab" mode="point-line" value="0" captionReading="ふた|てん|いち|かんかく|か|にてん|とお|ちょくせん|たし"}

### :ruby[三]{reading="みっ"}つの:ruby[対象]{reading="たいしょう"}

- :ruby[点]{reading="てん"}は:ruby[位置]{reading="いち"}を:ruby[表]{reading="あらわ"}します。:ruby[理想的]{reading="りそうてき"}な:ruby[点]{reading="てん"}には:ruby[長]{reading="なが"}さ、:ruby[幅]{reading="はば"}、:ruby[厚]{reading="あつ"}さがありません。
- :ruby[直線]{reading="ちょくせん"}は、まっすぐに:ruby[両方]{reading="りょうほう"}へ:ruby[限]{reading="かぎ"}りなく:ruby[続]{reading="つづ"}きます。
- :ruby[平面]{reading="へいめん"}は、:ruby[平]{reading="たい"}らにあらゆる:ruby[向]{reading="む"}きへ:ruby[限]{reading="かぎ"}りなく:ruby[広]{reading="ひろ"}がります。

:ruby[紙]{reading="かみ"}に:ruby[書]{reading="か"}いた:ruby[点]{reading="てん"}には:ruby[大]{reading="おお"}きさがあり、:ruby[線]{reading="せん"}には:ruby[太]{reading="ふと"}さがあります。これらは:ruby[数学上]{reading="すうがくじょう"}の:ruby[点]{reading="てん"}や:ruby[直線]{reading="ちょくせん"}そのものではなく、:ruby[見]{reading="み"}えるようにした:ruby[図]{reading="ず"}です。

### :ruby[点]{reading="てん"}と:ruby[直線]{reading="ちょくせん"}の:ruby[関係]{reading="かんけい"}

:ruby[点]{reading="てん"} $A$ が:ruby[直線]{reading="ちょくせん"} $l$ の:ruby[上]{reading="うえ"}にあることを、

$$
A\in l
$$

と:ruby[表]{reading="あらわ"}すことがあります。ユークリッド:ruby[幾何]{reading="きか"}では、:ruby[異]{reading="こと"}なる:ruby[二点]{reading="にてん"}を:ruby[通]{reading="とお"}る:ruby[直線]{reading="ちょくせん"}は、ただ:ruby[一]{reading="ひと"}つだけあるとします。

:::callout{type="warning" title="直線と線分は違います" titleReading="ちょくせんとせんぶんはちがいます"}
:ruby[直線]{reading="ちょくせん"}は:ruby[両方]{reading="りょうほう"}へ:ruby[限]{reading="かぎ"}りなく:ruby[続]{reading="つづ"}きます。:ruby[二点]{reading="にてん"}の:ruby[間]{reading="あいだ"}だけを:ruby[取]{reading="と"}り:ruby[出]{reading="だ"}したものは:ruby[線分]{reading="せんぶん"}です。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[二点]{reading="にてん"}を:ruby[通]{reading="とお"}る:ruby[直線]{reading="ちょくせん"}

:ruby[問題]{reading="もんだい" strong="true"}

:ruby[異]{reading="こと"}なる:ruby[点]{reading="てん"} $A,B$ があるとき、その:ruby[二点]{reading="にてん"}を:ruby[通]{reading="とお"}る:ruby[直線]{reading="ちょくせん"}は:ruby[何本]{reading="なんぼん"}ありますか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

ユークリッド:ruby[幾何]{reading="きか"}の:ruby[接続]{reading="せつぞく"}に:ruby[関]{reading="かん"}する:ruby[規則]{reading="きそく"}を:ruby[使]{reading="つか"}います。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
ユークリッド:ruby[幾何]{reading="きか"}では、ただ $1$ :ruby[本]{reading="ぽん"}です。:ruby[図]{reading="ず"}の:ruby[線]{reading="せん"}を:ruby[両側]{reading="りょうがわ"}へ:ruby[伸]{reading="の"}ばしても、:ruby[同]{reading="おな"}じ:ruby[直線]{reading="ちょくせん"}です。
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[一点]{reading="いってん"}だけでは:ruby[決]{reading="き"}まらない

:ruby[問題]{reading="もんだい" strong="true"}

:ruby[点]{reading="てん"} $A$ を:ruby[通]{reading="とお"}る:ruby[直線]{reading="ちょくせん"}は、ただ:ruby[一]{reading="ひと"}つに:ruby[決]{reading="き"}まりますか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$A$ を:ruby[通]{reading="とお"}りながら、:ruby[直線]{reading="ちょくせん"}の:ruby[向]{reading="む"}きを:ruby[変]{reading="か"}えられるかを:ruby[考]{reading="かんが"}えます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[決]{reading="き"}まりません。$A$ を:ruby[通]{reading="とお"}る:ruby[向]{reading="む"}きはたくさんあるため、$A$ を:ruby[通]{reading="とお"}る:ruby[直線]{reading="ちょくせん"}もたくさんあります。:ruby[異]{reading="こと"}なる:ruby[二点]{reading="にてん"}があって、はじめてただ:ruby[一]{reading="ひと"}つに:ruby[決]{reading="き"}まります。
:::
