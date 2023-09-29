//セレクトボックスの選択によってテキストボックスの有効・無効を切り替える関数
function changeSelect(){
    var txtelm = document.getElementById("text");
    var btnelm = document.getElementById("button");
    var n = document.getElementById("select").selectedIndex;
    if(n == 0){ //選択項目をインデックスで判別 
        //「希望しない」選択時の処理
        txtelm.value = ""; //value値を空にする
        txtelm.disabled = true; //テキストボックスを無効にする
        btnelm.disabled = true; //ボタンを無効にする
    }else{
        //「希望する」選択時の処理
        txtelm.disabled = false; //テキストボックスを有効にする
        btnelm.disabled = false; //ボタンを有効にする
    }
}

//「確認」ボタンをクリックしたときの処理の関数
function clickButton(){
    var txtelm = document.getElementById("text");
    if(txtelm.disabled == false){ //「希望する」を選択している場合のみ行う処理
        if(txtelm.value == ""){ //未入力の場合
            alert("メールアドレスを入力して下さい。");
            txtelm.focus(); //フォーカスを合わせる
        }else if(txtelm.value.indexOf("@")<0){
        	//入力された文字列に「@」がない場合、入力された文字列を選択状態にする
            alert("メールアドレスを正確に入力して下さい。");
            txtelm.focus();
            txtelm.select();
        }else{        
            alert("メールアドレスです。");
        }
    }
}
