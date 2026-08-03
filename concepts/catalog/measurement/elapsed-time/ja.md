---
locale: ja
title: 時刻と時間の求め方
summary: 経過した時間は、始めの時刻から終わりの時刻までを、正時などの区切りを使って分けて求めます。
readingLevel:
  curriculum: jp-mext-2017
  grade: 3
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）』
    url: https://www.mext.go.jp/content/20230120-mxt_kyoiku02-100002604_01.pdf
    note: 算数〔第3学年〕C(2)(イ)、p.74。日常生活に必要な時刻・時間を求める内容を確認。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第3節 C(2)、pp.166-168。正時・正午を区切る考え、時計・数直線による考察を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

::interactive[二つの時計で経過時間を求める]{kind="measurement-lab" mode="elapsed" value="8" second="10" max="24" step="1" unit="hour" captionReading="ふたつのとけいでけいかじかんをもとめる"}

:ruby[時刻]{reading="じこく"}はある一つの時点、:ruby[時間]{reading="じかん" strong="true"}は二つの:ruby[時刻]{reading="じこく"}の間の長さです。

終わりの:ruby[時刻]{reading="じこく"}が次の正時をこえるときは、正時までと、正時から後に分けると考えやすくなります。

$$
\text{かかった時間}
=\text{おわりのじこく}-\text{はじめのじこく}
$$

ただし、時計では $60$ 分で $1$ 時間になるので、十進数の引き算だけで数字を:ruby[並べない]{reading="ならべない"}ようにします。

:::callout{type="warning" title="9時50分から10時10分" titleReading="9じ50ぷんから10じ10ぷん"}
$10.10-9.50$ とは計算しません。$9$ 時 $50$ 分から $10$ 時まで $10$ 分、その後 $10$ 分なので、:ruby[経過]{reading="けいか"}は $20$ 分です。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：正午をこえる時間

:ruby[問題]{reading="もんだい" strong="true"}

午前 $10$ 時 $45$ 分から午後 $0$ 時 $10$ 分までの時間を:ruby[求めて]{reading="もとめて"}ください。

:ruby[考え方]{reading="かんがえかた" strong="true"}

午前 $11$ 時、正午の二つを区切りにします。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
午前 $10$ 時 $45$ 分から $11$ 時まで $15$ 分、$11$ 時から正午まで $1$ 時間、正午から午後 $0$ 時 $10$ 分まで $10$ 分です。

$$
15\text{ 分}+60\text{ 分}+10\text{ 分}=85\text{ 分}
$$

したがって、$1$ 時間 $25$ 分です。
:::
