var p = document.getElementById('text');

var missType = 0;    //入力ミスの回数
var cnt = 0;            //入力数
//タイピングする文字列をここで用意しておく
var text1 = {
  "朝ごはんは毎朝必ず食べます":"asagohannhamaiasakanarazutabemasu",
  "今夜はとても疲れたのでもう寝ます":"konnyahatotemotukaretanodemounemasu",
  "夜の街を歩くのはかなり危険だから注意が必要だ":"yorunomatiwoarukunohakanarikikenndakaratyyuigahituyouda",
  "お金をたくさんもらいました":"okanewotakusannmoraimasita",
  "明日は晴れるはずなので新しい靴をはく":"asitahahareruhazunanodeatarasiikutuwohaku",
  "犬を飼いたいが禁止されている":"inuwokaitaigakinnsisareteiru",
  "天気がいいと気持ちがいい":"tennkigaiitokimotigaii",
  "服を買いたいが我慢する":"hukuwokaitaigagamannsuru"
};

var textLists = [];
for (var i in text1){
  textLists.push(text1[i]);
}

var checkTexts = [];

var time = function(){
  alert("ミス" + missType + "回, 入力数" + cnt + "回");
};

var create = function createText() {
    clr();
    //文字列をランダムに取得する
    var rnd = Math.floor(Math.random() * textLists.length);
    //前の文字列を削除してから次の文字列を表示する
    p.textContent = '';

    //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
    checkTexts = textLists[rnd].split('').map(function(value) {
        var span = document.createElement('span');

        span.textContent = value;
        p.appendChild(span);

        return span;
    });
}

document.addEventListener('keyup', keyDown, null);

function start(){
  setTimeout("create()",1000);
  setTimeout("time()",30000);
  cnt = 0;
  missType = 0;
};

function clr(){
  document.js.box.value = "";
};

function keyDown(e) {
    if(e.keyCode == "32" && "16"){
      start();
    }
    //キーボードからの入力は「e.key」に格納されている
   if(e.key === checkTexts[0].textContent) {
        checkTexts[0].className = 'add-blue';
        cnt++;

        //0番目の配列要素を削除して、次の1文字を比較対象にする
        checkTexts.shift();

        //配列要素が空っぽになったら次の問題を出す
        if(!checkTexts.length) {
          create()
        };
  }else if(e.key !== checkTexts[0].textContent){
    missType++;
  }
}
