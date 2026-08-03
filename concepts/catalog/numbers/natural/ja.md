---
locale: ja
title: 自然数
summary: 自然数は、ものの個数や順序を表す 0, 1, 2, 3, … の数であり、0を含めるかどうかは分野ごとの約束で明記します。
readingLevel:
  curriculum: jp-mext-2017
  grade: 1
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第2章「A 数と計算」および第3章第1学年。個数・順序・数の表し方としての数の意味を参照。
  - title: Richard Dedekind, Essays on the Theory of Numbers
    url: https://www.gutenberg.org/ebooks/21016
    note: Part II §§6–8, §14。自然数列、順序、有限な集まりの個数との関係を参照。
  - title: Giuseppe Peano, Arithmetices principia, nova methodo exposita
    url: https://archive.org/details/arithmeticespri00peangoog
    note: 本文冒頭の公理 P1–P9。原著では1を最初の自然数とする歴史的な約束を確認。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[自然数]{reading="しぜんすう" strong="true"}は、ものの:ruby[個数]{reading="こすう"}を:ruby[数]{reading="かぞ"}えたり、:ruby[順番]{reading="じゅんばん"}を:ruby[表]{reading="あらわ"}したりするときに:ruby[使]{reading="つか"}う:ruby[数]{reading="かず"}です。この:ruby[記事]{reading="きじ"}では、$0$ をふくめて

$$
\mathbb{N}=\{0,1,2,3,\ldots\}
$$

とします。

::interactive[自然数をおはじきで数える]{kind="counter-mat" mode="count" value="8" second="0" max="20" captionReading="しぜんすう|かぞ"}

### :ruby[個数]{reading="こすう"}と:ruby[順番]{reading="じゅんばん"}

$3$ は「りんごが $3$ :ruby[個]{reading="こ"}ある」のように:ruby[個数]{reading="こすう"}を:ruby[表]{reading="あらわ"}せます。また、「:ruby[前]{reading="まえ"}から $3$ :ruby[番目]{reading="ばんめ"}」のように:ruby[順番]{reading="じゅんばん"}も:ruby[表]{reading="あらわ"}せます。

$0$ は、:ruby[数]{reading="かぞ"}えるものが:ruby[一]{reading="ひと"}つもない:ruby[個数]{reading="こすう"}を:ruby[表]{reading="あらわ"}します。

### :ruby[次]{reading="つぎ"}の:ruby[数]{reading="かず"}

:ruby[自然数]{reading="しぜんすう"}には、いつでも:ruby[次]{reading="つぎ"}の:ruby[自然数]{reading="しぜんすう"}があります。$n$ の:ruby[次]{reading="つぎ"}の:ruby[数]{reading="かず"}を $S(n)$ と:ruby[書]{reading="か"}くと、

$$
S(0)=1,\qquad S(1)=2,\qquad S(2)=3
$$

です。この「:ruby[次]{reading="つぎ"}の:ruby[数]{reading="かず"}」を:ruby[後者]{reading="こうしゃ"}といいます。どの:ruby[自然数]{reading="しぜんすう"}にも:ruby[次]{reading="つぎ"}があるので、:ruby[一番大]{reading="いちばんおお"}きい:ruby[自然数]{reading="しぜんすう"}はありません。

:::callout{type="note" title="0を自然数に含めるか" titleReading="0をしぜんすうにふくめるか"}
:ruby[本]{reading="ほん"}や:ruby[分野]{reading="ぶんや"}によっては、$1,2,3,\ldots$ だけを:ruby[自然数]{reading="しぜんすう"}とします。$\mathbb{N}$ を:ruby[使]{reading="つか"}うときは、$0$ をふくめるかを:ruby[確]{reading="たし"}かめます。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[個数]{reading="こすう"}と:ruby[順番]{reading="じゅんばん"}

:ruby[問題]{reading="もんだい" strong="true"}

:ruby[箱]{reading="はこ"}の:ruby[中]{reading="なか"}にボールがありません。この:ruby[個数]{reading="こすう"}を:ruby[表]{reading="あらわ"}す:ruby[自然数]{reading="しぜんすう"}と、:ruby[列]{reading="れつ"}の $4$ :ruby[番目]{reading="ばんめ"}を:ruby[表]{reading="あらわ"}す:ruby[自然数]{reading="しぜんすう"}を:ruby[答]{reading="こた"}えてください。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[一]{reading="ひと"}つもない:ruby[個数]{reading="こすう"}と、:ruby[順番]{reading="じゅんばん"}を:ruby[表]{reading="あらわ"}す:ruby[数]{reading="かず"}を:ruby[分]{reading="わ"}けて:ruby[考]{reading="かんが"}えます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[箱]{reading="はこ"}の:ruby[中]{reading="なか"}の:ruby[個数]{reading="こすう"}は $0$、:ruby[順番]{reading="じゅんばん"}は $4$ です。どちらも:ruby[自然数]{reading="しぜんすう"}ですが、$0$ は:ruby[個数]{reading="こすう"}、$4$ は:ruby[順番]{reading="じゅんばん"}を:ruby[表]{reading="あらわ"}しています。
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[自然数]{reading="しぜんすう"}ではない:ruby[数]{reading="かず"}

:ruby[問題]{reading="もんだい" strong="true"}

$\frac{1}{2}$ と $5$ のうち、この:ruby[記事]{reading="きじ"}の:ruby[約束]{reading="やくそく"}で:ruby[自然数]{reading="しぜんすう"}なのはどちらですか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

$0,1,2,3,\ldots$ の:ruby[並]{reading="なら"}びにあるかを:ruby[確]{reading="たし"}かめます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$5$ は:ruby[自然数]{reading="しぜんすう"}です。$\frac{1}{2}$ は $0$ と $1$ の:ruby[間]{reading="あいだ"}の:ruby[数]{reading="かず"}ですが、$0,1,2,3,\ldots$ の:ruby[中]{reading="なか"}にはないので:ruby[自然数]{reading="しぜんすう"}ではありません。
:::
