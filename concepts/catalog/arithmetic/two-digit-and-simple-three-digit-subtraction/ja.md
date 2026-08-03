---
locale: ja
title: 2桁と簡単な3桁の引き算・筆算
summary: 2桁どうしや簡単な3桁の引き算は、同じ位どうしを引き、その位だけでは引けないときに一つ上の位を10個のまとまりへ直して計算します。
readingLevel:
  curriculum: jp-mext-2017
  grade: 2
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）』
    url: https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
    note: 算数〔第2学年〕A(2)ア(ア)・(イ)、p.69。2位数の加法の逆の減法と筆算、および簡単な3位数などの減法を扱うことを確認。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第2節 A(2)「加法、減法」pp.108–111。位をそろえる筆算の原理と、百の位から繰り下がらない簡単な3位数の減法の範囲を確認。
status: draft
---

## :ruby[説明]{reading="せつめい"}

$2$ :ruby[桁]{reading="けた"}どうしの引き算では、:ruby[同]{reading="おな"}じ:ruby[位]{reading="くらい"}どうしを引きます。一の:ruby[位]{reading="くらい"}、十の:ruby[位]{reading="くらい"}、百の:ruby[位]{reading="くらい"}が上下にそろうように:ruby[数]{reading="かず"}を:ruby[書]{reading="か"}いて:ruby[計算]{reading="けいさん"}する:ruby[方法]{reading="ほうほう"}が、:ruby[筆算]{reading="ひっさん" strong="true"}です。

::interactive[52から27を引く筆算を見る]{kind="place-value-board" mode="regroup-subtract" value="52" second="27" max="999" captionReading="ひ|ひっさん|み"}

たとえば、$72-48$ の一の:ruby[位]{reading="くらい"}では、$2$ から $8$ を引けません。十の:ruby[位]{reading="くらい"}の $1$ を、一の:ruby[位]{reading="くらい"}の $10$ に:ruby[取]{reading="と"}り:ruby[替]{reading="か"}えると、$12-8$ を:ruby[計算]{reading="けいさん"}できます。この:ruby[取]{reading="と"}り:ruby[替]{reading="か"}えを、**:ruby[繰]{reading="く"}り下げ**といいます。

$$
\begin{aligned}
72-48
&=(60+12)-(40+8)\\
&=(60-40)+(12-8)\\
&=24
\end{aligned}
$$

$$
\begin{array}{r}
72\\
-48\\
\hline
24
\end{array}
$$

:ruby[筆算]{reading="ひっさん"}は、右:ruby[端]{reading="はし"}から一の:ruby[位]{reading="くらい"}どうしを引き、:ruby[必要]{reading="ひつよう"}なら一つ上の:ruby[位]{reading="くらい"}を:ruby[繰]{reading="く"}り下げて:ruby[進]{reading="すす"}めます。$10$ :ruby[個]{reading="こ"}のまとまりを一つ下の:ruby[位]{reading="くらい"}の $10$ :ruby[個]{reading="こ"}へ:ruby[直]{reading="なお"}しても、もとの:ruby[数]{reading="かず"}の大きさは:ruby[変]{reading="か"}わりません。

### :ruby[簡単]{reading="かんたん"}な $3$ :ruby[桁]{reading="けた"}の:ruby[減法]{reading="げんぽう"}

$3$ :ruby[桁]{reading="けた"}を:ruby[含]{reading="ふく"}む:ruby[減法]{reading="げんぽう"}では、:ruby[次]{reading="つぎ"}の二つが「:ruby[簡単]{reading="かんたん"}な:ruby[場合]{reading="ばあい"}」です。

- 百を一つのまとまりとして見る:ruby[減法]{reading="げんぽう"}。たとえば、$800-300=500$ です。
- $3$ :ruby[桁]{reading="けた"}から $2$ :ruby[桁]{reading="けた"}などを引く:ruby[減法]{reading="げんぽう"}で、百の:ruby[位]{reading="くらい"}からの:ruby[繰]{reading="く"}り下がりがないもの。たとえば、$546-27=519$ です。

:::callout{type="important" title="簡単な3桁の範囲" titleReading="かんたん|けた|はんい"}
$503-28$ では、百の:ruby[位]{reading="くらい"}を十の:ruby[位]{reading="くらい"}へ、さらに一の:ruby[位]{reading="くらい"}へ:ruby[繰]{reading="く"}り下げる:ruby[必要]{reading="ひつよう"}があります。そのため、ここでいう:ruby[第]{reading="だい"} $2$ :ruby[学年]{reading="がくねん"}の「:ruby[簡単]{reading="かんたん"}な $3$ :ruby[桁]{reading="けた"}」の:ruby[範囲]{reading="はんい"}には入りません。:ruby[数学]{reading="すうがく"}として:ruby[計算]{reading="けいさん"}できないという:ruby[意味]{reading="いみ"}ではなく、:ruby[扱]{reading="あつか"}う:ruby[範囲]{reading="はんい"}の:ruby[境界]{reading="きょうかい"}です。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} $1$：:ruby[繰]{reading="く"}り下がりのある引き算

:ruby[問題]{reading="もんだい" strong="true"}

$82-47$ を:ruby[筆算]{reading="ひっさん"}で:ruby[計算]{reading="けいさん"}してください。

:ruby[考]{reading="かんが" strong="true"}え:ruby[方]{reading="かた" strong="true"}

一の:ruby[位]{reading="くらい"}の $2$ から $7$ は引けないので、十の:ruby[位]{reading="くらい"}の $1$ を一の:ruby[位]{reading="くらい"}の $10$ に:ruby[直]{reading="なお"}します。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
一の:ruby[位]{reading="くらい"}は $12-7=5$ です。十の:ruby[位]{reading="くらい"}には $7$ :ruby[個]{reading="こ"}の十が:ruby[残]{reading="のこ"}るので、$7-4=3$ です。

$$
\begin{array}{r}
82\\
-47\\
\hline
35
\end{array}
$$

:ruby[答]{reading="こた"}えは $35$ です。
:::

### :ruby[例題]{reading="れいだい"} $2$：$3$ :ruby[桁]{reading="けた"}から $2$ :ruby[桁]{reading="けた"}を引く

:ruby[問題]{reading="もんだい" strong="true"}

$546-27$ を:ruby[筆算]{reading="ひっさん"}で:ruby[計算]{reading="けいさん"}してください。

:ruby[考]{reading="かんが" strong="true"}え:ruby[方]{reading="かた" strong="true"}

:ruby[桁数]{reading="けたすう"}が:ruby[違]{reading="ちが"}っても、**一の:ruby[位]{reading="くらい"}どうし、十の:ruby[位]{reading="くらい"}どうし**を上下にそろえます。百の:ruby[位]{reading="くらい"}からの:ruby[繰]{reading="く"}り下がりがないことも:ruby[確]{reading="たし"}かめます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
一の:ruby[位]{reading="くらい"}では十の:ruby[位]{reading="くらい"}から $1$ を:ruby[繰]{reading="く"}り下げ、$16-7=9$ とします。十の:ruby[位]{reading="くらい"}は $3-2=1$、百の:ruby[位]{reading="くらい"}は $5$ のままです。

$$
\begin{array}{r}
546\\
-27\\
\hline
519
\end{array}
$$

:ruby[答]{reading="こた"}えは $519$ です。
:::
