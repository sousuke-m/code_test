//選択した文字列をテキストボックスに表示させる関数
function clickOK(){    
    for(var i = 0;i < document.getElementsByTagName("p").length;i++){
        var s = "";
        if(document.getElementById("text" + i).value == "")
            s = " ※この項目は必須です！";
        document.getElementById("span" + i).innerHTML = s;
    }
}
