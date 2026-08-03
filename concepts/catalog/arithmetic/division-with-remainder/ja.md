---
locale: ja
title: 余りのある割り算
summary: 割り切れない整数の割り算では、分けられる最大の回数を商、分けた後に残る数を余りとして表します。
readingLevel:
  curriculum: jp-mext-2017
  grade: 3
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）』
    url: https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
    note: 算数〔第3学年〕A(4)(ア)、p.72。余りを含む除法の意味を確認。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第3節 A(4)、pp.147-150。余りは除数より小さいこと、検算、生活場面での余りの処理を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[余り]{reading="あまり" strong="true"}は、同じ数ずつ分けた後に:ruby[残る]{reading="のこる"}数です。たとえば、$13$ :ruby[個]{reading="こ"}を $4$ :ruby[個]{reading="こ"}ずつに分けると、$3$ 組できて $1$ :ruby[個]{reading="こ"}:ruby[残ります]{reading="のこります"}。

::interactive[余りのある除法を見る]{kind="counter-mat" mode="remainder" value="14" second="4" max="30" groups="4" captionReading="あま|じょほう|み"}

$$
13\div4=3\text{ あまり }1
$$

:ruby[余り]{reading="あまり"}は、分ける数より:ruby[必ず]{reading="かならず"}小さくなります。:ruby[余り]{reading="あまり"}が $4$ :ruby[以上]{reading="いじょう"}なら、もう一組作れるからです。

$$
\text{わられる数}
=\text{わる数}\times\text{商}+\text{あまり}
$$

この:ruby[関係]{reading="かんけい"}で、$4\times3+1=13$ と計算を:ruby[確かめられます]{reading="たしかめられます"}。

:::callout{type="warning" title="場面に合わせて答えます" titleReading="ばめんにあわせてこたえます"}
$13$ 人が一台に $4$ 人ずつ車へ乗る場合、商は $3$ でも、:ruby[余った]{reading="あまった"}一人のために車は全部で $4$ 台:ruby[必要]{reading="ひつよう"}です。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[余り]{reading="あまり"}を:ruby[確かめる]{reading="たしかめる"}

:ruby[問題]{reading="もんだい" strong="true"}

$29\div6$ の商と:ruby[余り]{reading="あまり"}を:ruby[求めて]{reading="もとめて"}ください。

:ruby[考え方]{reading="かんがえかた" strong="true"}

$29$ をこえない $6$ の倍数で、いちばん大きいものを:ruby[探します]{reading="さがします"}。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$6\times4=24$、$6\times5=30$ なので、

$$
29\div6=4\text{ あまり }5
$$

です。$6\times4+5=29$ で、:ruby[余り]{reading="あまり"}の $5$ は:ruby[割る]{reading="わる"}数の $6$ より小さいため、:ruby[条件]{reading="じょうけん"}にも合います。
:::
