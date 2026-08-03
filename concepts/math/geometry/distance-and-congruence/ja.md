---
locale: ja
title: 距離・同じ長さ・合同
summary: 距離は二点の離れ具合を表す量であり、移動・回転・裏返しでぴったり重なる図形は合同です。
readingLevel:
  curriculum: jp-mext-2017
  grade: 3
sources:
  - title: David Hilbert, Foundations of Geometry（Trinity College Dublin 対訳）
    url: https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/MA232A_Mich2017/HilbertAxioms_ParallelText.html
    note: Chapter I の合同公理群とその帰結。線分・角の合同、移し取り、三角形の合同を参照。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第3学年「B 図形」（解説p.162付近）。辺の長さの相等と、コンパスによる等しい長さの測り取り・移し取りを参照。
  - title: BIPM, The International System of Units (SI), 9th edition
    url: https://doi.org/10.59161/AUEZ1291
    note: 2026年更新版 §§2, 5。長さを数値と単位の積で表す標準的な記法を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[距離]{reading="きょり" strong="true"}は、:ruby[二点]{reading="にてん"}がどれだけ:ruby[離]{reading="はな"}れているかを:ruby[表]{reading="あらわ"}す:ruby[量]{reading="りょう"}です。:ruby[点]{reading="てん"} $A,B$ の:ruby[距離]{reading="きょり"}を $d(A,B)$ と:ruby[書]{reading="か"}きます。これは:ruby[線分]{reading="せんぶん"} $AB$ の:ruby[長]{reading="なが"}さです。

::interactive[合同な形の片方を動かして、もう片方に重なることを確かめる]{kind="geometry-lab" mode="congruence" value="30" captionReading="ごうどう|かたち|かたほう|うご|かたほう|かさ|たし"}

### :ruby[距離]{reading="きょり"}の:ruby[基本的]{reading="きほんてき"}な:ruby[性質]{reading="せいしつ"}

:ruby[距離]{reading="きょり"}には:ruby[次]{reading="つぎ"}の:ruby[性質]{reading="せいしつ"}があります。

$$
\begin{aligned}
d(A,B)&\ge0,\\
d(A,B)=0&\Longleftrightarrow A=B,\\
d(A,B)&=d(B,A),\\
d(A,C)&\le d(A,B)+d(B,C).
\end{aligned}
$$

:ruby[最後]{reading="さいご"}の:ruby[式]{reading="しき"}は、$A$ から $C$ へ:ruby[直接進]{reading="ちょくせつすす"}む:ruby[距離]{reading="きょり"}は、$B$ を:ruby[通]{reading="とお"}る:ruby[道]{reading="みち"}より:ruby[長]{reading="なが"}くならないという:ruby[三角不等式]{reading="さんかくふとうしき"}です。

### :ruby[同]{reading="おな"}じ:ruby[長]{reading="なが"}さ

:ruby[線分]{reading="せんぶん"} $AB$ と $CD$ の:ruby[長]{reading="なが"}さが:ruby[等]{reading="ひと"}しいとき、:ruby[二]{reading="ふた"}つの:ruby[線分]{reading="せんぶん"}は:ruby[合同]{reading="ごうどう"}であるといいます。

$$
AB\equiv CD
\Longleftrightarrow
d(A,B)=d(C,D)
$$

:ruby[場所]{reading="ばしょ"}や:ruby[向]{reading="む"}きが:ruby[違]{reading="ちが"}っても、:ruby[長]{reading="なが"}さが:ruby[等]{reading="ひと"}しければ:ruby[線分]{reading="せんぶん"}どうしは:ruby[合同]{reading="ごうどう"}です。コンパスは、この:ruby[長]{reading="なが"}さを:ruby[別]{reading="べつ"}の:ruby[場所]{reading="ばしょ"}へ:ruby[移]{reading="うつ"}す:ruby[道具]{reading="どうぐ"}として:ruby[使]{reading="つか"}えます。

### :ruby[図形]{reading="ずけい"}の:ruby[合同]{reading="ごうどう"}

:ruby[一方]{reading="いっぽう"}を:ruby[移動]{reading="いどう"}、:ruby[回転]{reading="かいてん"}、:ruby[裏返]{reading="うらがえ"}ししてもう:ruby[一方]{reading="いっぽう"}にぴったり:ruby[重]{reading="かさ"}なるとき、:ruby[二]{reading="ふた"}つの:ruby[図形]{reading="ずけい"}は:ruby[合同]{reading="ごうどう" strong="true"}です。:ruby[合同]{reading="ごうどう"}な:ruby[図形]{reading="ずけい"}では、:ruby[対応]{reading="たいおう"}する:ruby[辺]{reading="へん"}の:ruby[長]{reading="なが"}さと:ruby[角]{reading="かく"}の:ruby[大]{reading="おお"}きさが:ruby[等]{reading="ひと"}しくなります。

:::callout{type="warning" title="見た目だけで決めません" titleReading="みためだけできめません"}
:ruby[画面]{reading="がめん"}や:ruby[紙]{reading="かみ"}の:ruby[図]{reading="ず"}は:ruby[縮尺]{reading="しゅくしゃく"}どおりとは:ruby[限]{reading="かぎ"}りません。:ruby[長]{reading="なが"}さの:ruby[値]{reading="あたい"}、:ruby[等]{reading="ひと"}しいことを:ruby[示]{reading="しめ"}す:ruby[印]{reading="しるし"}、または:ruby[公理]{reading="こうり"}や:ruby[定理]{reading="ていり"}を:ruby[使]{reading="つか"}って:ruby[判断]{reading="はんだん"}します。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[円]{reading="えん"}の:ruby[半径]{reading="はんけい"}

:ruby[問題]{reading="もんだい" strong="true"}

:ruby[中心]{reading="ちゅうしん"} $O$ の:ruby[円]{reading="えん"}の:ruby[上]{reading="うえ"}に:ruby[点]{reading="てん"} $A,B$ があります。:ruby[線分]{reading="せんぶん"} $OA$ と $OB$ の:ruby[長]{reading="なが"}さにはどのような:ruby[関係]{reading="かんけい"}がありますか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[円]{reading="えん"}の:ruby[上]{reading="うえ"}の:ruby[点]{reading="てん"}が、:ruby[中心]{reading="ちゅうしん"}からどのような:ruby[距離]{reading="きょり"}にあるかを:ruby[使]{reading="つか"}います。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[円]{reading="えん"}は、:ruby[中心]{reading="ちゅうしん"}からの:ruby[距離]{reading="きょり"}が:ruby[同]{reading="おな"}じ:ruby[点]{reading="てん"}の:ruby[集]{reading="あつ"}まりです。したがって、

$$
d(O,A)=d(O,B)
$$

であり、:ruby[線分]{reading="せんぶん"} $OA$ と $OB$ は:ruby[合同]{reading="ごうどう"}です。
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[向]{reading="む"}きの:ruby[違]{reading="ちが"}う:ruby[線分]{reading="せんぶん"}

:ruby[問題]{reading="もんだい" strong="true"}

$AB=4,\mathrm{cm}$、$CD=4,\mathrm{cm}$ で、:ruby[二]{reading="ふた"}つの:ruby[線分]{reading="せんぶん"}の:ruby[向]{reading="む"}きが:ruby[違]{reading="ちが"}います。$AB$ と $CD$ は:ruby[合同]{reading="ごうどう"}ですか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[線分]{reading="せんぶん"}の:ruby[合同]{reading="ごうどう"}が、:ruby[向]{reading="む"}きと:ruby[長]{reading="なが"}さのどちらで:ruby[決]{reading="き"}まるかを:ruby[確]{reading="たし"}かめます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[合同]{reading="ごうどう"}です。

$$
d(A,B)=4,\mathrm{cm}=d(C,D)
$$

:ruby[線分]{reading="せんぶん"}の:ruby[合同]{reading="ごうどう"}は:ruby[場所]{reading="ばしょ"}や:ruby[向]{reading="む"}きではなく、:ruby[長]{reading="なが"}さが:ruby[等]{reading="ひと"}しいかで:ruby[決]{reading="き"}まります。
:::
