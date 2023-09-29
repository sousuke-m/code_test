//文字列に指定した文字列が含まれているか検索する関数
function checkStr(){
    //変数の宣言
    var pos = 0; //検索開始位置
	var times = 0; //検出回数
	var searchFor = document.getElementById("searchFor").value; //検索する文字
	var searchFrom = document.getElementById("searchFrom").value; //検索対象
    //検索文字列が入力されていない場合
	if(searchFor == ""){
		alert("検索する文字列を入力して下さい");
		return;
	}
	//検索対象文字列が入力されていない場合
	if(searchFrom == ""){
		alert("検索対象となる文字列がありません");
		return;
	}
	while(pos >= 0){ //検索対象を最後まで検索したらループを抜ける
		pos = searchFrom.indexOf(searchFor, pos);
		//一致する文字列が見つかった場合
		if(pos > 0){
			times++; //検出回数を+1する
			pos++; //次回の検索開始位置
		}
	}
    //検索結果をダイアログで表示
	alert("文章内から「" + searchFor + "」は" + times + "回検出されました");
}
