//来年までの時間を計算する関数
function countDown(){
    var today = new Date(); //現在時間を取得
    var year = today.getFullYear();    //年を取得
    var month = today.getMonth();      //月を取得
    var date = today.getDate();        //日を取得
    var hour = today.getHours();       //時を取得
    var minute = today.getMinutes();   //分を取得
    var second = today.getSeconds();   //秒を取得

    //来年までのミリ秒数を取得 
    var mSec = Date.UTC((year + 1), 0, 1, 0, 0, 0)
         - Date.UTC(year, month, date, hour, minute, second);

    //取得したミリ秒数から日数、時間、分、秒を割り出す
    var sec = mSec / 1000;  // ミリ秒は切り捨て
    var s = sec % 60;       //秒
    var min = (sec - s) / 60;
    var m = min % 60;       //分
    var hou = (min - m) / 60;
    var h = hou % 24;       //時
    var d = (hou - h) / 24; //日

    //画面へ表示
    document.getElementById("date").value = d;
    document.getElementById("hour").value = h;
    document.getElementById("minute").value = m;
    document.getElementById("second").value = s;
}
