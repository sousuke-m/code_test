//ページロード時にimgの配列を作成する関数
function pageLoad(){
    var imgnum = 4; //イメージの数
    images = new Array(); //文字列(imgタグのsrc属性に設定用)配列を作成
    imgelm = document.getElementById("img");
    //イメージの数だけ
    for(i = 0 ; i < imgnum ; i++){
        images[i] = "images/anime" + i + ".gif"; //配列の要素に順に代入
    }
}

//マウスオーバー時の処理の関数
function mouseOver(){
	imgelm.src = images[3]; //imgタグのsrc属性を変更
}

//マウスアウト時の処理の関数
function mouseOut(){
	imgelm.src = images[0]; //imgタグのsrc属性を変更
}

//マウスダウン時の処理の関数
function mouseDown(){
	imgelm.src = images[1]; //imgタグのsrc属性を変更
}

//マウスアップ時の処理の関数
function mouseUp(){
	imgelm.src = images[0]; //imgタグのsrc属性を変更
}

//マウスダブルクリック時の処理の関数
function dblClick(){
    count = 0; //アニメーション用のカウント変数（グローバル変数）
    alert("アニメーションを開始します。");
    timer1 = setInterval('animation()', 500); //0.5秒ごとにアニメーション
}

//画像をアニメーションさせる処理の関数
function animation(){
    imgelm.src = images[count]; //画像を切り替えます
    if(count >= 3){ //4枚目まで画像が切り替わったら
        clearInterval(timer1); //タイマーを削除します
    }   
    count++; //カウント変数を+1します
}

//マウス右クリック時の処理の関数
function onRClick(){
    alert("右クリックは無効です。");
    return false; //falseを返すと右クリックが無効になります
}
