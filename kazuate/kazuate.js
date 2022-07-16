// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let s =0;
// 予想を4回実行する

// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let b = document.querySelector('#print');
    b.addEventListener('click', greeting);

// 2. イベントハンドラの定義
function greeting() {
	let i = document.querySelector('input[name="seisuu"]');
	let seisuu = i.value;
	

    let yoso = seisuu;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    kaisu++;
    let presult = document.querySelector('p#result');
    span = document.createElement('span');
    presult.insertAdjacentElement('afterend',span);


    span.textContent = (kaisu+"回目の予想："+yoso+"  ");

    let presult2 = document.querySelector('p#result2');
    li = document.createElement('li');
    presult2.insertAdjacentElement('afterend',li);



    if(kotae == yoso){
        li.textContent = ("正解です。おめでとう！");
        
    }
     if(kaisu >= 4){
        li.textContent = ("答えは"+kotae+"でした．すでにゲームは終わっています");
        
}
    else if(kotae > yoso){
        li.textContent =("まちがい。答えはもっと大きいですよ");
        
    }
    else if(kotae < yoso){
        li.textContent =("まちがい。答えはもっと小さいですよ");
        
    }
}
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
}