---
locale: ja
title: 等号と等しさの規則
summary: 等号 = は左右が同じ数学的対象を表すことを示し、反射・対称・推移・置換という基本的な規則に従います。
readingLevel:
  curriculum: jp-mext-2017
  grade: 1
sources:
  - title: Open Logic Project, Tableaux with Identity predicate
    url: https://builds.openlogicproject.org/content/first-order-logic/tableaux/identity.pdf
    note: pp. 1–2。等しいものの置換、対称律、推移律の導出を参照。
  - title: Euclid’s Elements, Book I（Clark University）
    url: https://mathcs.clarku.edu/~djoyce/java/elements/bookI/bookI.html
    note: Common Notions 1–4。同じものに等しい対象どうしの等しさと、等しいものへの加減を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[等号]{reading="とうごう" strong="true"} $=$ は、:ruby[左右]{reading="さゆう"}が:ruby[同]{reading="おな"}じ:ruby[数学的対象]{reading="すうがくてきたいしょう"}を:ruby[表]{reading="あらわ"}すことを:ruby[示]{reading="しめ"}します。

::interactive[等号のつり合いを見る]{kind="equation-balance" mode="equality" value="7" second="7" max="20" captionReading="とうごう|あ|み"}

$$
2+3=5
$$

この:ruby[式]{reading="しき"}では、$2+3$ と $5$ は:ruby[見]{reading="み"}た:ruby[目]{reading="め"}が:ruby[違]{reading="ちが"}っても、:ruby[同]{reading="おな"}じ:ruby[数]{reading="かず"}です。$=$ は「:ruby[答]{reading="こた"}えを:ruby[書]{reading="か"}く:ruby[印]{reading="しるし"}」ではなく、:ruby[左]{reading="ひだり"}と:ruby[右]{reading="みぎ"}が:ruby[等]{reading="ひと"}しいという:ruby[関係]{reading="かんけい"}を:ruby[表]{reading="あらわ"}します。

### :ruby[四]{reading="よっ"}つの:ruby[基本規則]{reading="きほんきそく"}

:ruby[等]{reading="ひと"}しさには:ruby[次]{reading="つぎ"}の:ruby[規則]{reading="きそく"}があります。

$$
\begin{aligned}
a&=a,\\
a=b&\Longrightarrow b=a,\\
a=b,\ b=c&\Longrightarrow a=c.
\end{aligned}
$$

- :ruby[反射律]{reading="はんしゃりつ"}：どの:ruby[対象]{reading="たいしょう"}も:ruby[自分自身]{reading="じぶんじしん"}と:ruby[等]{reading="ひと"}しい。
- :ruby[対称律]{reading="たいしょうりつ"}：:ruby[左右]{reading="さゆう"}を:ruby[入]{reading="い"}れ:ruby[替]{reading="か"}えても:ruby[等]{reading="ひと"}しい。
- :ruby[推移律]{reading="すいいりつ"}：:ruby[同]{reading="おな"}じ:ruby[対象]{reading="たいしょう"}を:ruby[間]{reading="あいだ"}にはさんだ:ruby[二]{reading="ふた"}つの:ruby[等号]{reading="とうごう"}をつなげられる。

さらに、$a=b$ なら、:ruby[正]{reading="ただ"}しい:ruby[文]{reading="ぶん"}の:ruby[中]{reading="なか"}で $a$ を $b$ に:ruby[置]{reading="お"}き:ruby[換]{reading="か"}えられます。これを:ruby[置換規則]{reading="ちかんきそく" strong="true"}といいます。

$$
a=b \Longrightarrow a+c=b+c
$$

:::callout{type="warning" title="同じように見えることとは違います" titleReading="おなじようにみえることとはちがいます"}
:ruby[形]{reading="かたち"}や:ruby[大]{reading="おお"}きさが:ruby[似]{reading="に"}ているだけでは、:ruby[同]{reading="おな"}じ:ruby[対象]{reading="たいしょう"}とは:ruby[限]{reading="かぎ"}りません。およその:ruby[等]{reading="ひと"}しさを:ruby[表]{reading="あらわ"}す $\approx$ と、:ruby[等号]{reading="とうごう"} $=$ は:ruby[区別]{reading="くべつ"}します。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[等号]{reading="とうごう"}をつなぐ

:ruby[問題]{reading="もんだい" strong="true"}

$y=x$ と $x=7$ が:ruby[成]{reading="な"}り:ruby[立]{reading="た"}つとき、$y$ はいくつですか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[二]{reading="ふた"}つの:ruby[式]{reading="しき"}に:ruby[同]{reading="おな"}じ $x$ があることに:ruby[注目]{reading="ちゅうもく"}します。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[推移律]{reading="すいいりつ"}から、

$$
y=x,\quad x=7 \Longrightarrow y=7
$$

です。したがって、$y$ は $7$ です。
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[等号]{reading="とうごう"}ではない:ruby[記号]{reading="きごう"}

:ruby[問題]{reading="もんだい" strong="true"}

$\frac{1}{3}$ を:ruby[小数]{reading="しょうすう"}で:ruby[短]{reading="みじか"}く $0.33$ と:ruby[書]{reading="か"}くとき、$\frac{1}{3}=0.33$ としてよいですか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$\frac{1}{3}$ と $0.33$ が:ruby[正確]{reading="せいかく"}に:ruby[同]{reading="おな"}じ:ruby[数]{reading="かず"}かを:ruby[分数]{reading="ぶんすう"}で:ruby[比]{reading="くら"}べます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$0.33=\frac{33}{100}$ であり、$\frac{1}{3}$ とは:ruby[同]{reading="おな"}じ:ruby[数]{reading="かず"}ではありません。:ruby[近]{reading="ちか"}い:ruby[値]{reading="あたい"}であることを:ruby[表]{reading="あらわ"}すなら、

$$
\frac{1}{3}\approx0.33
$$

と:ruby[書]{reading="か"}きます。
:::
