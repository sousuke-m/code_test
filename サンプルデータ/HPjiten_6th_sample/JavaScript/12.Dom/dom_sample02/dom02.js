//要素をたどって文字列を抜き出す関数
function copyTel(){    
    var elm1 = document.getElementById("div1"); // id="div1"の要素を参照
    var elm2 = elm1.getElementsByTagName("p")[1]; // その中の２番目のp要素を参照
    
    // 子要素を１つずつ評価し、inputタグならその値を追加
    var s = "";
    for(var e = elm2.firstChild; e!=null; e = e.nextSibling) {
        if(e.tagName == "INPUT") {
            s += e.value + "-";
        }
    }
    s = s.slice(0, -1); // 末尾の１文字を削除
    alert(s);
}
