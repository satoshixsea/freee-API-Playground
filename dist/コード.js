var token_url = "https://accounts.secure.freee.co.jp/public_api/token";
var client_id = getScriptProperty("client_id");
var client_secret = getScriptProperty("client_secret");
var redirect_uri = ScriptApp.getService().getUrl();// このスクリプトのWebアプリのURL

function doGet(e) {
  if (e["parameter"]["code"]) {// eに認可コードがあれば
    var response = getAccessToken(e);// 初回アクセストークンを取得する
    return HtmlService.createTemplateFromFile("success").evaluate();// ここでindexを開くと?code=がURLについている→ページ更新したときにエラーが出るためsuccessページをはさむ
  } else { // eに認可コードがない場合はindexを開く
    return HtmlService.createTemplateFromFile("index").evaluate();
  }
}

function include(filename) {// css.htmlやjs.html等を読み込めるようにする
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

/************************************
認可コードを利用してトークン情報を取得して返す（初回のみ使用する）
次回からはリフレッシュトークンを使ってトークン情報を更新できる
************************************/
function getAccessToken(e) {
  var code = e["parameter"]["code"];
  var payload = {
    "grant_type": "authorization_code",
    "client_id": client_id,
    "client_secret": client_secret,
    "code": code,
    "redirect_uri": redirect_uri
  }
  var response = UrlFetchApp.fetch(token_url, getOptions(payload));
  setUserProperties(JSON.parse(response));// response内のトークン等の情報をユーザープロパティに保存する
  return response;
}

/************************************
refresh_tokenを使って更新したトークン情報を返す
************************************/
function runRefresh() { 
  var refresh_token = getUserProperty("refresh_token");
  var payload = {
    "grant_type": "refresh_token",
    "client_id": client_id,
    "client_secret": client_secret,
    "refresh_token": refresh_token
  }
  var response = UrlFetchApp.fetch(token_url, getOptions(payload));
  setUserProperties(JSON.parse(response));
  return "refresh done";
}

/************************************
渡されたmethodでrequestを実行する
************************************/
function runMethod(obj) {
  runRefresh();// 実行する度にトークンリフレッシュする
  var url = obj["endpoint"];
  var method = obj["method"];
  var payload = obj["payload"];
  var access_token = getUserProperty("access_token");  
  
  var options = {
    "method": method,
    "contentType": "application/json",
    "headers": { 
      "Authorization": "Bearer " + access_token,
      "X-Api-Version": 2020-06-15
    },
    "payload": payload,
    "muteHttpExceptions": true
  }
  var response = UrlFetchApp.fetch(url, options);// ここでAPIを実行して結果を取得する
  var allHeaders = response.getAllHeaders();// ヘッダー情報を取得する
  var json = JSON.parse(response);
  var result = {
    "headers": allHeaders,
    "body": json
  }
  return result;
}

/************************************
optionsを作って返す
************************************/
function getOptions(payload) {
  var options = {
    "method": "post",
    "contentType": "application/x-www-form-urlencoded",
    "payload": payload
  }
  return options;
}

/************************************
PropertiesService
************************************/
function setUserProperties(jobj) {// ユーザのプロパティに値を保存する
  PropertiesService.getUserProperties().setProperties(jobj);
}

function getUserProperty(key) {// ユーザのプロパティから値を取得する
  return PropertiesService.getUserProperties().getProperty(key);
}

function getScriptProperty(key) {// スクリプトのプロパティから値を取得する
  return PropertiesService.getScriptProperties().getProperty(key);
}
