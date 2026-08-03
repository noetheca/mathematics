---
locale: ja
title: 大きな数と位取り
summary: 大きな整数も、一、十、百、千、万という十倍ずつの位を使って表せます。
readingLevel:
  curriculum: jp-mext-2017
  grade: 3
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）』
    url: https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
    note: 算数〔第3学年〕A(1)及び内容の取扱い(1)、pp.71, 75。万の単位、10倍・100倍・1000倍・10分の1、1億までの範囲を確認。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第3節 A(1)「数の表し方」、pp.136-138。十進位取り記数法、数直線、数の相対的な大きさを参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[位取り]{reading="くらいどり" strong="true"}とは、数字が:ruby[置かれた]{reading="おかれた"}:ruby[位置]{reading="いち"}で、その数字の大きさを表す仕組みです。右から:ruby[順に]{reading="じゅんに"}一、十、百、千、万の:ruby[位]{reading="くらい"}となり、左へ一つ:ruby[移る]{reading="うつる"}ごとに大きさは $10$ 倍になります。

::interactive[12345の位取りを見る]{kind="place-value-board" mode="large" value="12345" second="0" max="99999" captionReading="くらいど|み"}

$$
10\,000 = 1\text{万},\qquad 100\,000\,000 = 1\text{おく}
$$

右の「おく」は、:ruby[億]{reading="おく"}という:ruby[位]{reading="くらい"}です。

$10$ 倍、$100$ 倍、$1000$ 倍にすると、それぞれの数字は左へ $1$ :ruby[桁]{reading="けた"}、$2$ :ruby[桁]{reading="けた"}、$3$ :ruby[桁]{reading="けた"}に当たる:ruby[位]{reading="くらい"}へ:ruby[移ります]{reading="うつります"}。$\frac{1}{10}$ の大きさにすると、右へ一つの:ruby[位]{reading="くらい"}へ:ruby[移ります]{reading="うつります"}。

また、$24\,000$ を「千が $24$ :ruby[個]{reading="こ"}」と見るように、まとまりを:ruby[単位]{reading="たんい"}にして数を見ることを:ruby[相対的]{reading="そうたいてき"}な見方といいます。

:::callout{type="important" title="0も位を表します" titleReading="0もくらいをあらわします"}
$30\,504$ の $0$ は、その:ruby[位]{reading="くらい"}にまとまりがないことを:ruby[示します]{reading="しめします"}。:ruby[途中]{reading="とちゅう"}の $0$ を:ruby[省く]{reading="はぶく"}と、:ruby[別]{reading="べつ"}の数になります。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：数を:ruby[位]{reading="くらい"}ごとに分ける

:ruby[問題]{reading="もんだい" strong="true"}

$30\,504\,000$ を万のまとまりで見てください。また、この数の $10$ 倍を:ruby[求めて]{reading="もとめて"}ください。

:ruby[考え方]{reading="かんがえかた" strong="true"}

万を一つの:ruby[単位]{reading="たんい"}として数え、$10$ 倍では:ruby[各数字]{reading="かくすうじ"}を一つ左の:ruby[位]{reading="くらい"}へ:ruby[移します]{reading="うつします"}。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$30\,504\,000$ は $3050$ 万と $4000$ です。また、

$$
30\,504\,000 \times 10 = 305\,040\,000
$$

です。数字の:ruby[並び]{reading="ならび"}を:ruby[保った]{reading="たもった"}まま、:ruby[各数字]{reading="かくすうじ"}が一つ大きい:ruby[位]{reading="くらい"}を表します。
:::
