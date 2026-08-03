---
locale: ja
title: 長方形の面積
summary: 長方形の面積は、直角に交わる二つの辺の長さをかけることで求められます。
readingLevel:
  curriculum: jp-mext-2017
  grade: 4
sources:
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第3章第4節「第4学年の内容」B図形。面積の意味と長方形の面積公式を参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[面積]{reading="めんせき" strong="true"}は、形が占める広さを表す量です。:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}の長さが同じ:ruby[単位]{reading="たんい"}で表されている長方形では、次の式で:ruby[面積]{reading="めんせき"}を求められます。

$$
\text{長方形の面積} = \text{縦} \times \text{横}
$$

### :ruby[前提知識]{reading="ぜんていちしき"}

この:ruby[説明]{reading="せつめい"}では、長方形、長さの:ruby[単位]{reading="たんい"}、:ruby[掛け算]{reading="かけざん"}を使います。$\mathrm{cm}^2$ は:ruby[平方センチメートル]{reading="へいほうセンチメートル"}と読み、$1$ :ruby[辺]{reading="へん"}が $1\,\mathrm{cm}$ の正方形の:ruby[面積]{reading="めんせき"}を表します。

:::callout{type="note" title="1マスの大きさ"}
図の $1$ マスは、:ruby[縦]{reading="たて"} $1\,\mathrm{cm}$、:ruby[横]{reading="よこ"} $1\,\mathrm{cm}$ の正方形です。$1$ マスの:ruby[面積]{reading="めんせき"}は常に $1\,\mathrm{cm}^2$ と:ruby[表示]{reading="ひょうじ"}されます。
:::

### 図で考える

次の図では、:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}のスライダーを動かせます。:ruby[初期状態]{reading="しょきじょうたい"}は:ruby[縦]{reading="たて"} $3\,\mathrm{cm}$、:ruby[横]{reading="よこ"} $4\,\mathrm{cm}$ です。:ruby[操作]{reading="そうさ"}できない場合にも、:ruby[初期状態]{reading="しょきじょうたい"}の:ruby[格子]{reading="こうし"}と式が:ruby[表示]{reading="ひょうじ"}されます。

::interactive[縦と横を変えて、面積がどのように変わるか確かめる]{kind="rectangle-area-grid" rows="3" columns="4" unit="cm" captionReading="たてとよこをかえて、めんせきがどのようにかわるかたしかめる"}

:ruby[縦方向]{reading="たてほうこう"}には $1\,\mathrm{cm}^2$ の正方形が $3$ :ruby[個]{reading="こ"}:ruby[並び]{reading="ならび"}、その:ruby[並び]{reading="ならび"}が:ruby[横方向]{reading="よこほうこう"}に $4$ 列あります。正方形は全部で $3 \times 4 = 12$ :ruby[個]{reading="こ"}なので、この長方形の:ruby[面積]{reading="めんせき"}は $12\,\mathrm{cm}^2$ です。

:::details{summary="理由を見る" summaryReading="りゆうをみる"}
:ruby[縦]{reading="たて"} $1$ 列に:ruby[並ぶ]{reading="ならぶ"} $1\,\mathrm{cm}^2$ の正方形の:ruby[個数]{reading="こすう"}は、:ruby[縦]{reading="たて"}の長さを $1\,\mathrm{cm}$ :ruby[単位]{reading="たんい"}で表した数と同じです。その列が:ruby[横]{reading="よこ"}の長さを $1\,\mathrm{cm}$ :ruby[単位]{reading="たんい"}で表した数だけ:ruby[並ぶ]{reading="ならぶ"}ため、正方形の:ruby[総数]{reading="そうすう"}は $\text{縦} \times \text{横}$ になります。

:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}が整数でなくても、$0.1\,\mathrm{cm}$ などの:ruby[共通]{reading="きょうつう"}する小さな:ruby[単位]{reading="たんい"}の整数倍で表せる場合は、同じ数え方でこの:ruby[関係]{reading="かんけい"}を:ruby[確かめられます]{reading="たしかめられます"}。
:::

### :ruby[基本的な性質]{reading="きほんてきなせいしつ"}

:ruby[掛け算]{reading="かけざん"}では $3 \times 4 = 4 \times 3$ なので、長方形を $90^\circ$ 回転して:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}を:ruby[入れ替えて]{reading="いれかえて"}も、:ruby[面積]{reading="めんせき"}は変わりません。

一方、:ruby[面積]{reading="めんせき" strong="true"}と:ruby[周]{reading="しゅう" strong="true"}の長さは別の:ruby[量]{reading="りょう"}です。:ruby[面積]{reading="めんせき"}は内部の広さを $\mathrm{cm}^2$ で表し、:ruby[周]{reading="しゅう"}の長さは外側を一周する長さを $\mathrm{cm}$ で表します。

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[面積]{reading="めんせき"}を求める

**問題**

:ruby[縦]{reading="たて"} $5\,\mathrm{cm}$、:ruby[横]{reading="よこ"} $6\,\mathrm{cm}$ の長方形の:ruby[面積]{reading="めんせき"}を求めてください。

**考え方**

:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}はどちらも $\mathrm{cm}$ で表されているので、二つの長さを:ruby[掛けます]{reading="かけます"}。

:::details{summary="解答を見る" summaryReading="かいとうをみる"}
$$
5 \times 6 = 30
$$

したがって、:ruby[面積]{reading="めんせき"}は $30\,\mathrm{cm}^2$ です。
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[周]{reading="しゅう"}の長さが同じなら、:ruby[面積]{reading="めんせき"}も同じか

**問題**

:ruby[縦]{reading="たて"} $2\,\mathrm{cm}$・:ruby[横]{reading="よこ"} $6\,\mathrm{cm}$ の長方形と、:ruby[縦]{reading="たて"} $3\,\mathrm{cm}$・:ruby[横]{reading="よこ"} $5\,\mathrm{cm}$ の長方形は、どちらも:ruby[周]{reading="しゅう"}の長さが $16\,\mathrm{cm}$ です。:ruby[面積]{reading="めんせき"}も同じでしょうか。

**考え方**

:ruby[周]{reading="しゅう"}の長さが同じという条件だけで決めず、二つの長方形の:ruby[面積]{reading="めんせき"}をそれぞれ計算して比べます。

:::details{summary="解答を見る" summaryReading="かいとうをみる"}
それぞれの:ruby[面積]{reading="めんせき"}は、

$$
\begin{aligned}
2 \times 6 &= 12\,\mathrm{cm}^2,\\
3 \times 5 &= 15\,\mathrm{cm}^2
\end{aligned}
$$

です。したがって、:ruby[周]{reading="しゅう"}の長さが同じでも、:ruby[面積]{reading="めんせき"}が同じとは:ruby[限りません]{reading="かぎりません"}。:ruby[周]{reading="しゅう"}の長さを求める足し算を、:ruby[面積]{reading="めんせき"}の計算と:ruby[混同]{reading="こんどう"}しないことが大切です。
:::

## 練習問題

1. :ruby[縦]{reading="たて"} $2\,\mathrm{cm}$、:ruby[横]{reading="よこ"} $7\,\mathrm{cm}$ の長方形の:ruby[面積]{reading="めんせき"}を求めてください。
2. :ruby[面積]{reading="めんせき"}が $24\,\mathrm{cm}^2$ で、:ruby[横]{reading="よこ"}が $6\,\mathrm{cm}$ の長方形があります。:ruby[縦]{reading="たて"}の長さを求めてください。
3. :ruby[面積]{reading="めんせき"}が $18\,\mathrm{cm}^2$ になる、:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}が整数の長方形をすべて:ruby[挙げて]{reading="あげて"}ください。ただし、:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}を:ruby[入れ替えた]{reading="いれかえた"}だけのものは同じものとします。

:::details{summary="練習問題の解答と考え方" summaryReading="れんしゅうもんだい|かいとう|かんが|かた"}
1. $2 \times 7 = 14$ より、$14\,\mathrm{cm}^2$ です。
2. $24 \div 6 = 4$ より、$4\,\mathrm{cm}$ です。
3. $1 \times 18$、$2 \times 9$、$3 \times 6$ より、:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}が $1\,\mathrm{cm}$ と $18\,\mathrm{cm}$、$2\,\mathrm{cm}$ と $9\,\mathrm{cm}$、$3\,\mathrm{cm}$ と $6\,\mathrm{cm}$ の三通りです。
:::
