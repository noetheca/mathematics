---
locale: ja
title: 2桁を1桁で割る簡単な計算
summary: 2桁を1桁で割る計算のうち、十と一のまとまりをそれぞれ割り切れる場合は、位ごとに分けて求められます。
readingLevel:
  curriculum: jp-mext-2017
  grade: 3
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）』
    url: https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
    note: 算数〔第3学年〕A(4)(オ)、p.72。除数1桁・商2桁の簡単な除法を確認。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第3節 A(4)、pp.148-149。80÷4型と69÷3型の計算方法を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

十の:ruby[位]{reading="くらい"}と一の:ruby[位]{reading="くらい"}をそれぞれ:ruby[割り切れる]{reading="わりきれる"}場合は、:ruby[位ごとに分ける]{reading="くらいごとにわける" strong="true"}と、$2$ :ruby[桁]{reading="けた"}を $1$ :ruby[桁]{reading="けた"}で:ruby[割れます]{reading="われます"}。

::interactive[84を4で割る位取りを見る]{kind="place-value-board" mode="divide" value="84" second="4" max="999" captionReading="わ|くらいど|み"}

$$
\begin{aligned}
69\div3
&=(60+9)\div3\\
&=60\div3+9\div3\\
&=20+3\\
&=23
\end{aligned}
$$

$80\div4$ は、$80$ を「十が $8$ :ruby[個]{reading="こ"}」と見ると、$8\div4=2$ から「十が $2$ :ruby[個]{reading="こ"}」、つまり $20$ だと分かります。

:::callout{type="warning" title="この方法をそのまま使えない場合" titleReading="このほうほうをそのままつかえないばあい"}
$72\div3$ では、十の:ruby[位]{reading="くらい"}の $7$ を $3$ で:ruby[割り切れません]{reading="わりきれません"}。ここで:ruby[扱う]{reading="あつかう"}:ruby[簡単]{reading="かんたん"}な場合とは:ruby[条件]{reading="じょうけん"}が:ruby[異なります]{reading="ことなります"}。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[位]{reading="くらい"}ごとに:ruby[割る]{reading="わる"}

:ruby[問題]{reading="もんだい" strong="true"}

$84\div2$ を:ruby[求めて]{reading="もとめて"}ください。

:ruby[考え方]{reading="かんがえかた" strong="true"}

$84$ を $80+4$ に分けます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
$$
84\div2=80\div2+4\div2=40+2=42
$$

$42\times2=84$ なので、答えを:ruby[確かめられます]{reading="たしかめられます"}。
:::
