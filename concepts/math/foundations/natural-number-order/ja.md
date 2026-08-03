---
locale: ja
title: 自然数の順序
summary: 自然数の順序は、数が自然数列のどこに現れるかによって大小を比べる関係です。
readingLevel:
  curriculum: jp-mext-2017
  grade: 1
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第2章「A 数と計算」および第3章第1～3学年。数の大小、順序、相対的な大きさの扱いを参照。
  - title: Richard Dedekind, Essays on the Theory of Numbers
    url: https://www.gutenberg.org/ebooks/21016
    note: Part II §§7–8。自然数列における大きい数・小さい数と有限部分の順序を参照。
  - title: Encyclopedia of Mathematics, “Order (on a set)”
    url: https://encyclopediaofmath.org/wiki/Order_%28on_a_set%29
    note: 本文冒頭の順序の定義と「A total order」の段落。反射性、反対称性、推移性、全順序、および < と ≤ の区別を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[自然数]{reading="しぜんすう"}の:ruby[順序]{reading="じゅんじょ" strong="true"}は、$0,1,2,3,\ldots$ と:ruby[数]{reading="かず"}を:ruby[並]{reading="なら"}べたとき、どちらが:ruby[先]{reading="さき"}に:ruby[現]{reading="あらわ"}れるかで:ruby[大小]{reading="だいしょう"}を:ruby[比]{reading="くら"}べる:ruby[関係]{reading="かんけい"}です。

::interactive[数の順序を数直線で比べる]{kind="number-line" mode="order" min="0" max="20" value="7" second="12" step="1" captionReading="かず|じゅんじょ|すうちょくせん|くら"}

### :ruby[大小記号]{reading="だいしょうきごう"}

$$
a<b,\qquad a>b,\qquad a\le b,\qquad a\ge b
$$

- $a<b$：$a$ は $b$ より:ruby[小]{reading="ちい"}さい。
- $a>b$：$a$ は $b$ より:ruby[大]{reading="おお"}きい。
- $a\le b$：$a$ は $b$ :ruby[以下]{reading="いか"}。
- $a\ge b$：$a$ は $b$ :ruby[以上]{reading="いじょう"}。

$a\le b$ は、$a<b$ または $a=b$ のどちらかが:ruby[成]{reading="な"}り:ruby[立]{reading="た"}つことです。$<$ と $\le$ は、:ruby[等]{reading="ひと"}しい:ruby[場合]{reading="ばあい"}をふくむかどうかが:ruby[違]{reading="ちが"}います。

### :ruby[順序]{reading="じゅんじょ"}の:ruby[基本的]{reading="きほんてき"}な:ruby[性質]{reading="せいしつ"}

:ruby[自然数]{reading="しぜんすう"}の $\le$ には:ruby[次]{reading="つぎ"}の:ruby[性質]{reading="せいしつ"}があります。

1. $a\le a$ です。
2. $a\le b$ かつ $b\le a$ なら、$a=b$ です。
3. $a\le b$ かつ $b\le c$ なら、$a\le c$ です。
4. どの $a,b$ でも、$a\le b$ または $b\le a$ です。

:ruby[四]{reading="よっ"}つ:ruby[目]{reading="め"}により、どの:ruby[二]{reading="ふた"}つの:ruby[自然数]{reading="しぜんすう"}も:ruby[比]{reading="くら"}べられます。このような:ruby[順序]{reading="じゅんじょ"}を:ruby[全順序]{reading="ぜんじゅんじょ"}といいます。

:::details{summary="次の数を使った定義" summaryReading="つぎ|かず|つか|ていぎ"}
$a\le b$ とは、$a$ から「:ruby[次]{reading="つぎ"}の:ruby[数]{reading="かず"}」へ:ruby[何回]{reading="なんかい"}か:ruby[進]{reading="すす"}むと $b$ に:ruby[着]{reading="つ"}くことだと:ruby[定]{reading="さだ"}められます。$0$ :ruby[回]{reading="かい"}でもよいので、$a\le a$ も:ruby[成]{reading="な"}り:ruby[立]{reading="た"}ちます。

$a<b$ では:ruby[一回以上]{reading="いっかいいじょう"}:ruby[進]{reading="すす"}むため、$a<a$ は:ruby[成]{reading="な"}り:ruby[立]{reading="た"}ちません。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[二]{reading="ふた"}つの:ruby[数]{reading="かず"}を:ruby[比]{reading="くら"}べる

:ruby[問題]{reading="もんだい" strong="true"}

$27$ と $72$ の:ruby[大小]{reading="だいしょう"}を:ruby[記号]{reading="きごう"}で:ruby[表]{reading="あらわ"}してください。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[自然数]{reading="しぜんすう"}の:ruby[並]{reading="なら"}びで、どちらが:ruby[先]{reading="さき"}に:ruby[現]{reading="あらわ"}れるかを:ruby[見]{reading="み"}ます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$27$ は $72$ より:ruby[先]{reading="さき"}に:ruby[現]{reading="あらわ"}れるので、

$$
27<72
$$

です。:ruby[反対側]{reading="はんたいがわ"}から:ruby[書]{reading="か"}けば $72>27$ です。
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[等]{reading="ひと"}しい:ruby[場合]{reading="ばあい"}

:ruby[問題]{reading="もんだい" strong="true"}

$5<5$ と $5\le5$ は、それぞれ:ruby[正]{reading="ただ"}しいですか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$<$ と $\le$ のどちらが:ruby[等]{reading="ひと"}しい:ruby[場合]{reading="ばあい"}をふくむかを:ruby[確]{reading="たし"}かめます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$5<5$ は:ruby[正]{reading="ただ"}しくありません。$<$ は:ruby[等]{reading="ひと"}しい:ruby[場合]{reading="ばあい"}をふくまないからです。$5\le5$ は:ruby[等]{reading="ひと"}しい:ruby[場合]{reading="ばあい"}をふくむので:ruby[正]{reading="ただ"}しいです。
:::
