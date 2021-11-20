const token_url = "https://accounts.secure.freee.co.jp/public_api/token";
const client_id = getScriptProperty("client_id");
const client_secret = getScriptProperty("client_secret");
const redirect_uri = returnAppUrl();

function returnAppUrl() {// success.htmlでも呼ぶので関数にしておく
  return getScriptProperty("redirect_uri");// このスクリプトのWebアプリのURL
}

function doGet(e) {
  if (e["parameter"]["code"]) {// eに認可コードがあれば
    getAccessToken(e);// 初回アクセストークンを取得する
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
  const code = e["parameter"]["code"];
  const payload = {
    "grant_type": "authorization_code",
    "client_id": client_id,
    "client_secret": client_secret,
    "code": code,
    "redirect_uri": redirect_uri
  }
  const response = UrlFetchApp.fetch(token_url, getOptions(payload));
  setUserProperties(JSON.parse(response));// response内のトークン等の情報をユーザープロパティに保存する
  return response;
}

/************************************
refresh_tokenを使って更新したトークン情報を返す
************************************/
function runRefresh() { 
  const refresh_token = getUserProperty("refresh_token");
  const payload = {
    "grant_type": "refresh_token",
    "client_id": client_id,
    "client_secret": client_secret,
    "refresh_token": refresh_token
  }
  const response = UrlFetchApp.fetch(token_url, getOptions(payload));
  setUserProperties(JSON.parse(response));
  return "refresh done";
}

/************************************
渡されたmethodでrequestを実行する
************************************/
function runMethod(obj) {
  runRefresh();// 実行する度にトークンリフレッシュする
  const url = obj["endpoint"];
  const method = obj["method"];
  const payload = obj["payload"];
  const access_token = getUserProperty("access_token");
  const apiVersion =  obj["apiVersion"];
  
  const options = {
    "method": method,
    "contentType": "application/json",
    "headers": { 
      "Authorization": "Bearer " + access_token,
      "X-Api-Version": apiVersion
    },
    "payload": payload,
    "muteHttpExceptions": true
  }

  const response = UrlFetchApp.fetch(url, options);// ここでAPIを実行して結果を取得する
  let body;

  if(response.getContentText() === "") {// responseの中身が空なら
    body = "";// JSON.parseするとSyntaxError: Unexpected end of JSON inputが出るので回避する
  } else {// responseの中身が空じゃなければ
    body = JSON.parse(response);
  }

  const result = {
    "headers": response.getAllHeaders(),// ヘッダー情報を取得する
    "body": body
  }
  return result;
}

/************************************
optionsを作って返す
************************************/
function getOptions(payload) {
  const options = {
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
