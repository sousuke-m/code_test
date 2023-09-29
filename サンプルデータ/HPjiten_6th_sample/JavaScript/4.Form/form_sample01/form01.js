//フォーム内の未入力をチェックする関数
function check(){
    var e = document.getElementById("form1");   
	for( i=0 ; i<e.length ; i++ ){ //フォーム内のエレメントの数だけ繰り返し
		//エレメントのタイプが"text"で、かつ未入力の場合、falseを返す
		if((e.elements[i].type == "text") && (e.elements[i].value == "")){
			alert("すべての欄に入力してください");
			return false;
		}
	}
	return true; //すべての項目が入力済みなら、trueを返す
}
