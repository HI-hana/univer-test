let p = document.getElementById("text");

//document.getElementById("jap").japanese;


function Button_reload() {
  window.location.reload();
};

let missType = 0;    //入力ミスの回数
let cnt = 0;            //入力数
//タイピングする文字列をここで用意しておく
let text1 = {
  "朝ごはんは毎朝必ず食べます": "asagohannhamaiasakanarazutabemasu",
  "今夜はとても疲れたのでもう寝ます": "konnyahatotemotukaretanodemounemasu",
  "夜の街を歩くのは危険だ": "yorunomatiwoarukunohakikennda",
  "お金をたくさんもらいました": "okanewotakusannmoraimasita",
  "明日は晴れるはずだった": "asitahahareru",
  "犬を飼いたいが禁止されている": "inuwokaitaigakinnsisareteiru",
  "天気がいいと気持ちがいい": "tennkigaiitokimotigaii",
  "服を買いたいが我慢する": "hukuwokaitaigagamannsuru",
  "元気が一番大切です": "gennkigaitibanntaisetudesu",
  "今年の夏はすごく暑い": "kotosinonatuhasugokuatui",
  "東京はとても賑やかな街だ": "toukyouhatotemonigiyakanamatida",
  "勉強をやりなさいと言われる": "bennkyouwoyarinasaitoiwareru",
  "耳にタコができるほど聞いた": "miminitakogadekiruhodokiita",
  "花火へ連れて行く": "hanabihetureteiku",
  "これ以外何もいりません": "koreigainanimoirimasenn",
  "君はいつも背中が冷たい": "kimihaitumosenakagatumetai",
  "昨夜のことを鮮明に覚えています": "sakuyanokotowosennmenioboeteimasu",
  "あどけない子供の顔": "adokenaikodomonokao",
  "あの子はどんな苦労もいとわない": "anokohadonnnakuroumoitowanai",
  "うつろな目で座っていた": "uturonamedesuwatteita",
  "本番さながらの練習をする": "honnbannsanagaranorennsyuuwosuru",
  "急に転校生が来てとてもとまどった": "kyuunitennkouseigakitetotemotomadotta",
  "みんなにねぎらいの言葉をかけてくれた": "minnnaninegiraninokotobawokaketekureta",
  "だれかの前だとはにかんでなにも言えない": "darekanomaedatohanikanndenanimoienai",
  "へりくだった態度になる": "herikudattataidoninaru",
  "僕に片付けのほとんどをゆだねた": "bokunikatadukenohotonndowoyudaneta"
};

let textLists = [];
for (let i in text1) {
  textLists.push(text1[i]);
}

let checkTexts = [];

let time = function () {
  alert("ミス" + missType + "回, 入力数" + cnt + "回");
  Button_reload();
};

let create = function createText() {
  clr();

  //文字列をランダムに取得する
  const rnd = Math.floor(Math.random() * textLists.length);

  //前の文字列を削除してから次の文字列を表示する
  p.textContent = '';
 
  //文字列を1文字ずつに分解して、それぞれにspanタグを挿入する
  checkTexts = textLists[rnd].split('').map(function (value) {
    let span = document.createElement('span');

    span.textContent = value;
    p.appendChild(span);
    return span;
  });
  //let ja = Object.keys(text1);
  //var japanese= ja[rnd];
}

document.addEventListener('keyup', keyDown, null);


function start() {
  setTimeout("create()", 1000);
  setTimeout("time()", 120000);
  cnt = 0;
  missType = 0;
};

function clr() {
  document.js.box.value = "";
};

function keyDown(e) {
  if (e.keyCode == "32") {
    start();
  }
  //キーボードからの入力は「e.key」に格納されている
  if (e.key == checkTexts[0].textContent) {
    checkTexts[0].className = 'add-blue';
    cnt++;

    //0番目の配列要素を削除して、次の1文字を比較対象にする
    checkTexts.shift();

    //配列要素が空っぽになったら次の問題を出す
    if (!checkTexts.length) {
      create();
    };
  } else if (e.key !== checkTexts[0].textContent) {
    missType++;
    cnt++;
  }
}
