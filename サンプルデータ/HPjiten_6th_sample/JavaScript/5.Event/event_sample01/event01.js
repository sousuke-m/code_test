//イベントの情報を参照する関数
function imgError(){
	res = confirm("画像の読み込みエラーです。\n再度ページを読み込みます");
	if(res == true){ //confirmダイアログで「OK」をクリック
	    //imgタグのsrc属性を変更    
	    document.getElementById("img").src = "images/cat.gif";
	}
}
