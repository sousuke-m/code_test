//合計金額を計算する関数
function calcPrice(){
	var momo = document.getElementById("momo").selectedIndex * 4000;
	var budou = document.getElementById("budou").selectedIndex * 3000;
	document.getElementById("output").value = momo + budou;
}

//送信ボタンをクリックしたときの処理をする関数
function submitForm(){  
    if(document.getElementById("output").value == "0"){
        alert("金額は0円です。");
        return false;
    }
    var res = confirm("金額は" + document.getElementById("output").value
         + "円です。\nよろしいですか？");
    if(!res){
        return false; //submit処理をキャンセルします
    }
    return true;
}

//リセットボタンをクリックしたとき処理をする関数
function resetForm(){
    var res = confirm("フォーム内容をリセットします。\nよろしいですか？");
    if(!res){
        return false; //リセット処理をキャンセルします
    }
    return true;
}
