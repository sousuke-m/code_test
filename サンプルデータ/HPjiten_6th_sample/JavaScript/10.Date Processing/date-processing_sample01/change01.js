//入力された値を計算する関数
function calc(){
    var e = document.getElementById("form1");
    var formula = e.num1.value
    	        + e.select1.options[e.select1.selectedIndex].value
                + e.num2.value; //計算式文字列
    var result = eval(formula); //計算結果を変数resultに代入
    e.result1.value = result;
    return result;
}

//計算結果の値をn進数に変換する関数
function change(radix){
    var e = document.getElementById("form1");
    var num = calc();
    e.result1.value = num.toString(radix);
}
