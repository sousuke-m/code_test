//ブラウザの情報を参照する関数
function pageLoad(){
    var s = "<p>アプリケーション名(appName)： " + navigator.appName + "</p>"
    + "<p>バージョン(appVersion)： " + navigator.appVersion + "</p>"
    + "<p>コード名(appCodeName)： " + navigator.appCodeName + "</p>";

    //Internet Explorer 10以前はlanguageプロパティは非対応
    if( typeof navigator.language != 'undefined')
        s += "<p>使用言語(language)： " + navigator.language + "</p>";
    else
        s += "<p>使用言語(browserLanguage)： "
                + navigator.browserLanguage + "</p>";

    s += "<p>プラットフォーム(platform)： " + navigator.platform + "</p>";
    s += "<p>エージェント名(userAgent)： " + navigator.userAgent + "</p>";

    //作成したHTMLを<body>タグ内に挿入
    document.getElementById("body").innerHTML = s;
}
