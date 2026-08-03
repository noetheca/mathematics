---
locale: ja
title: 点の間・線分・半直線
summary: 三点が同じ直線上に並ぶときの「間」を使って、線分と半直線を定められます。
readingLevel:
  curriculum: jp-mext-2017
  grade: 2
sources:
  - title: David Hilbert, Foundations of Geometry（Trinity College Dublin 対訳）
    url: https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/MA232A_Mich2017/HilbertAxioms_ParallelText.html
    note: Chapter I §§3–4。「間」を原始関係として置く順序公理と、線分・半直線の用語を参照。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第2章「B 図形」および第3章第2学年。直線、辺、頂点など図形を構成する要素の扱いを参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[異]{reading="こと"}なる:ruby[三点]{reading="さんてん"} $A,B,C$ が:ruby[同]{reading="おな"}じ:ruby[直線上]{reading="ちょくせんじょう"}にあり、$B$ が $A$ から $C$ へ:ruby[進]{reading="すす"}むとちゅうにあるとき、$B$ は $A$ と $C$ の:ruby[間]{reading="あいだ" strong="true"}にあるといいます。

::interactive[線分上の点を動かして、両端と間の関係を確かめる]{kind="geometry-lab" mode="segment" value="0" captionReading="せんぶんじょう|てん|うご|りょうたん|あいだ|かんけい|たし"}

$$
\operatorname{Bet}(A,B,C)
$$

は「$B$ が $A$ と $C$ の:ruby[間]{reading="あいだ"}にある」という:ruby[関係]{reading="かんけい"}を:ruby[表]{reading="あらわ"}す:ruby[書]{reading="か"}き:ruby[方]{reading="かた"}の:ruby[一例]{reading="いちれい"}です。$A$ と $C$ を:ruby[入]{reading="い"}れ:ruby[替]{reading="か"}えても、$B$ が:ruby[間]{reading="あいだ"}にあることは:ruby[変]{reading="か"}わりません。

$$
\operatorname{Bet}(A,B,C)
\Longleftrightarrow
\operatorname{Bet}(C,B,A)
$$

### :ruby[線分]{reading="せんぶん"}

:ruby[線分]{reading="せんぶん" strong="true"} $AB$ は、:ruby[点]{reading="てん"} $A,B$ と、その:ruby[二点]{reading="にてん"}の:ruby[間]{reading="あいだ"}にあるすべての:ruby[点]{reading="てん"}を:ruby[合]{reading="あ"}わせたものです。$A,B$ を:ruby[端点]{reading="たんてん"}といいます。

### :ruby[半直線]{reading="はんちょくせん"}

:ruby[半直線]{reading="はんちょくせん" strong="true"} $AB$ は、$A$ から:ruby[始]{reading="はじ"}まり、$B$ を:ruby[通]{reading="とお"}って、その:ruby[先]{reading="さき"}へ:ruby[限]{reading="かぎ"}りなく:ruby[続]{reading="つづ"}きます。$AB$ と $BA$ は:ruby[始]{reading="はじ"}まる:ruby[点]{reading="てん"}が:ruby[違]{reading="ちが"}うため、:ruby[同]{reading="おな"}じ:ruby[半直線]{reading="はんちょくせん"}ではありません。

:::callout{type="important" title="三つを区別します" titleReading="みっつをくべつします"}
:ruby[直線]{reading="ちょくせん"}は:ruby[両方]{reading="りょうほう"}へ、:ruby[半直線]{reading="はんちょくせん"}は:ruby[一方]{reading="いっぽう"}へ:ruby[限]{reading="かぎ"}りなく:ruby[続]{reading="つづ"}きます。:ruby[線分]{reading="せんぶん"}は:ruby[二]{reading="ふた"}つの:ruby[端点]{reading="たんてん"}で:ruby[終]{reading="お"}わります。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[間]{reading="あいだ"}の:ruby[点]{reading="てん"}

:ruby[問題]{reading="もんだい" strong="true"}

:ruby[同]{reading="おな"}じ:ruby[直線上]{reading="ちょくせんじょう"}に $P,Q,R$ がこの:ruby[順]{reading="じゅん"}に:ruby[並]{reading="なら"}んでいます。どの:ruby[点]{reading="てん"}がほかの:ruby[二点]{reading="にてん"}の:ruby[間]{reading="あいだ"}にありますか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[三点]{reading="さんてん"}を:ruby[一方]{reading="いっぽう"}から:ruby[順]{reading="じゅん"}にたどり、:ruby[中央]{reading="ちゅうおう"}の:ruby[点]{reading="てん"}を:ruby[見]{reading="み"}ます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$Q$ が $P$ と $R$ の:ruby[間]{reading="あいだ"}にあります。

$$
\operatorname{Bet}(P,Q,R)
$$
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[半直線]{reading="はんちょくせん"}の:ruby[向]{reading="む"}き

:ruby[問題]{reading="もんだい" strong="true"}

$A,B,C$ がこの:ruby[順]{reading="じゅん"}に:ruby[並]{reading="なら"}ぶとき、$C$ は:ruby[半直線]{reading="はんちょくせん"} $AB$ の:ruby[上]{reading="うえ"}にありますか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[半直線]{reading="はんちょくせん"} $AB$ がどの:ruby[点]{reading="てん"}から:ruby[始]{reading="はじ"}まり、どちらへ:ruby[続]{reading="つづ"}くかを:ruby[確]{reading="たし"}かめます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
あります。:ruby[半直線]{reading="はんちょくせん"} $AB$ は $A$ から $B$ を:ruby[通]{reading="とお"}ってその:ruby[先]{reading="さき"}へ:ruby[続]{reading="つづ"}くので、$C$ もその:ruby[上]{reading="うえ"}にあります。
:::
