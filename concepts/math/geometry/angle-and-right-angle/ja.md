---
locale: ja
title: 角と直角
summary: 角は同じ端点から出る二つの半直線がつくる開きであり、直角は1回転を四等分した大きさの角です。
readingLevel:
  curriculum: jp-mext-2017
  grade: 2
sources:
  - title: Euclid’s Elements, Book I（Clark University）
    url: https://mathcs.clarku.edu/~djoyce/java/elements/bookI/bookI.html
    note: Definitions 8–12 および Postulate 4。平面角、直線角、直角と、すべての直角が等しいという公準を参照。
  - title: David Hilbert, Foundations of Geometry（Trinity College Dublin 対訳）
    url: https://www.maths.tcd.ie/~dwilkins/Courses/MA232A/MA232A_Mich2017/HilbertAxioms_ParallelText.html
    note: Chapter I の合同公理群にある Terminology。二つの半直線としての角、頂点・辺・内側、隣り合う合同な角としての直角を参照。
  - title: 文部科学省『小学校学習指導要領（平成29年告示）解説 算数編』
    url: https://www.mext.go.jp/content/20211102-mxt_kyoiku02-100002607_04.pdf
    note: 第2章「B 図形」、第3章第2学年、および第3学年 B(1)(イ) p.161。直角と、図形を構成する要素としての角、重ね合わせによる角の大小・相等の扱いを参照。
status: draft
---

## :ruby[説明]{reading="せつめい"}

:ruby[角]{reading="かく" strong="true"}は、:ruby[同]{reading="おな"}じ:ruby[端点]{reading="たんてん"}から:ruby[出]{reading="で"}る:ruby[二]{reading="ふた"}つの:ruby[半直線]{reading="はんちょくせん"}がつくる:ruby[開]{reading="ひら"}きです。:ruby[共通]{reading="きょうつう"}する:ruby[端点]{reading="たんてん"}を:ruby[頂点]{reading="ちょうてん"}、:ruby[二]{reading="ふた"}つの:ruby[半直線]{reading="はんちょくせん"}を:ruby[角]{reading="かく"}の:ruby[辺]{reading="へん"}といいます。

::interactive[角の開き方と向きを変えて、直角になる開き方を確かめる]{kind="geometry-lab" mode="right-angle" value="0" captionReading="かく|ひら|かた|む|か|ちょっかく|ひら|かた|たし"}

:ruby[点]{reading="てん"} $O$ を:ruby[頂点]{reading="ちょうてん"}とし、:ruby[半直線]{reading="はんちょくせん"} $OA,OB$ を:ruby[辺]{reading="へん"}とする:ruby[角]{reading="かく"}を

$$
\angle AOB
$$

と:ruby[書]{reading="か"}きます。:ruby[中央]{reading="ちゅうおう"}の $O$ が:ruby[頂点]{reading="ちょうてん"}です。

### :ruby[開]{reading="ひら"}きと:ruby[回転]{reading="かいてん"}

:ruby[角]{reading="かく"}の:ruby[大]{reading="おお"}きさは、:ruby[一方]{reading="いっぽう"}の:ruby[辺]{reading="へん"}からもう:ruby[一方]{reading="いっぽう"}の:ruby[辺]{reading="へん"}まで、どれだけ:ruby[回]{reading="まわ"}したかで:ruby[表]{reading="あらわ"}せます。

:ruby[二]{reading="ふた"}つの:ruby[半直線]{reading="はんちょくせん"}は:ruby[平面]{reading="へいめん"}を:ruby[二]{reading="ふた"}つの:ruby[側]{reading="がわ"}に:ruby[分]{reading="わ"}けます。そのため、:ruby[一般]{reading="いっぱん"}にはどちら:ruby[側]{reading="がわ"}の:ruby[回転]{reading="かいてん"}を:ruby[角]{reading="かく"}とするかも:ruby[決]{reading="き"}めます。:ruby[多角形]{reading="たかくけい"}では、ふつう:ruby[形]{reading="かたち"}の:ruby[内側]{reading="うちがわ"}の:ruby[角]{reading="かく"}を:ruby[考]{reading="かんが"}えます。

### :ruby[角]{reading="かく"}の:ruby[大小]{reading="だいしょう"}と:ruby[相等]{reading="そうとう"}

:ruby[角]{reading="かく"}を:ruby[切]{reading="き"}り:ruby[取]{reading="と"}った:ruby[紙]{reading="かみ"}などで:ruby[重]{reading="かさ"}ね、:ruby[頂点]{reading="ちょうてん"}と:ruby[一方]{reading="いっぽう"}の:ruby[辺]{reading="へん"}をそろえると、:ruby[度]{reading="ど"}を:ruby[使]{reading="つか"}わなくても:ruby[開]{reading="ひら"}きを:ruby[比]{reading="くら"}べられます。もう:ruby[一方]{reading="いっぽう"}の:ruby[辺]{reading="へん"}もぴったり:ruby[重]{reading="かさ"}なれば、:ruby[二]{reading="ふた"}つの:ruby[角]{reading="かく"}の:ruby[大]{reading="おお"}きさは:ruby[等]{reading="ひと"}しいといいます。:ruby[外側]{reading="そとがわ"}へ:ruby[開]{reading="ひら"}くほうが、より:ruby[大]{reading="おお"}きい:ruby[角]{reading="かく"}です。

### :ruby[直角]{reading="ちょっかく"}

:ruby[直角]{reading="ちょっかく" strong="true"}は、$1$ :ruby[回転]{reading="かいてん"}を:ruby[四等分]{reading="よんとうぶん"}した:ruby[大]{reading="おお"}きさの:ruby[角]{reading="かく"}です。

:ruby[反対向]{reading="はんたいむ"}きの:ruby[二]{reading="ふた"}つの:ruby[半直線]{reading="はんちょくせん"}がつくる:ruby[開]{reading="ひら"}きを、:ruby[別]{reading="べつ"}の:ruby[半直線]{reading="はんちょくせん"}が:ruby[同]{reading="おな"}じ:ruby[二]{reading="ふた"}つの:ruby[角]{reading="かく"}に:ruby[分]{reading="わ"}けたとき、その:ruby[二]{reading="ふた"}つはどちらも:ruby[直角]{reading="ちょっかく"}です。

:::callout{type="note" title="図の向きにはよりません" titleReading="ずのむきにはよりません"}
:ruby[直角]{reading="ちょっかく"}は、:ruby[図]{reading="ず"}を:ruby[回]{reading="まわ"}しても:ruby[直角]{reading="ちょっかく"}のままです。「:ruby[縦]{reading="たて"}と:ruby[横]{reading="よこ"}に:ruby[見]{reading="み"}えるか」ではなく、:ruby[二辺]{reading="にへん"}の:ruby[開]{reading="ひら"}きで:ruby[判断]{reading="はんだん"}します。
:::

## :ruby[例題]{reading="れいだい"}

### :ruby[例題]{reading="れいだい"} 1：:ruby[角]{reading="かく"}の:ruby[頂点]{reading="ちょうてん"}

:ruby[問題]{reading="もんだい" strong="true"}

$\angle PQR$ の:ruby[頂点]{reading="ちょうてん"}と:ruby[二]{reading="ふた"}つの:ruby[辺]{reading="へん"}を:ruby[答]{reading="こた"}えてください。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[角]{reading="かく"}の:ruby[記号]{reading="きごう"}では、:ruby[中央]{reading="ちゅうおう"}の:ruby[文字]{reading="もじ"}が:ruby[頂点]{reading="ちょうてん"}です。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[頂点]{reading="ちょうてん"}は:ruby[中央]{reading="ちゅうおう"}に:ruby[書]{reading="か"}かれた $Q$ です。:ruby[辺]{reading="へん"}は:ruby[半直線]{reading="はんちょくせん"} $QP$ と:ruby[半直線]{reading="はんちょくせん"} $QR$ です。
:::

### :ruby[例題]{reading="れいだい"} 2：:ruby[図]{reading="ず"}を:ruby[回]{reading="まわ"}した:ruby[直角]{reading="ちょっかく"}

:ruby[問題]{reading="もんだい" strong="true"}

:ruby[正方形]{reading="せいほうけい"}をななめに:ruby[回]{reading="まわ"}すと、:ruby[四]{reading="よっ"}つの:ruby[角]{reading="かく"}は:ruby[直角]{reading="ちょっかく"}ではなくなりますか。

:ruby[考]{reading="かんが"}え:ruby[方]{reading="かた" strong="true"}

:ruby[形]{reading="かたち"}を:ruby[回]{reading="まわ"}す:ruby[前後]{reading="ぜんご"}で、:ruby[二辺]{reading="にへん"}の:ruby[開]{reading="ひら"}きが:ruby[変]{reading="か"}わるかを:ruby[見]{reading="み"}ます。

:::details{summary="解答を見る" summaryReading="かいとう|み"}
:ruby[直角]{reading="ちょっかく"}のままです。:ruby[形全体]{reading="かたちぜんたい"}を:ruby[回]{reading="まわ"}しても、:ruby[二辺]{reading="にへん"}の:ruby[開]{reading="ひら"}きは:ruby[変]{reading="か"}わりません。
:::
