# freee-API-Playground-for-GAS

<a href="https://accounts.secure.freee.co.jp/public_api/authorize?client_id=c5f4e365ce4dee9df3d8ecb0d99794b77ebba3624f90db02de0c8cc58bab3c72&redirect_uri=https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbzcDPjC5EbWBNO15UlYei9yXAbfB96hVByUyhBbr4nVh4xgLA4e%2Fexec&response_type=code">freeeと連携する</a>
<br>


## 利用方法

※この連携アプリを利用するためにはGoogleアカウントが必要です

### このアプリについて
- freee APIをいつでもすぐに試せる環境を手元に作れます
- Google Apps ScriptのUser Propertyにfreeeの認証情報が保存されます
  →アクセストークンやリフレッシュトークンの情報がGoogleアカウントに保存されます
- GitHubのソースコードをクローンしてfreeeアプリを作成すればカスタマイズも自由です

### 連携方法
1. freeeと連携する をクリック
2. freeeのデータを読み書きする権限をアプリに許可する
3. Googleアカウントにアプリの実行を許可する

### 使い方
- 会計freee / 人事労務freeeを選択します
- requestにcompaniesなどのリソースやパラメータを入れてGETボタンをクリックします
- POST / PUT / DELETEを行う際はpayloadにJSONを入れてクリックします
- レスポンスヘッダも取得したい時は with headers をチェックします
- token refresh：アクセストークンを更新
- your accesstoken：保存されている最新のアクセストークンを表示

### 注意事項
- 指定した事業所のデータを実際に読み書きします
- テスト環境で試すことをおすすめします

### 連携解除方法
- freeeの連携を解除する<br>
  →<a href="https://app.secure.freee.co.jp/developers/applications">マイアプリ一覧</a>
  →連携解除
- Googleアカウントの実行許可を削除する<br>
  →<a href="https://myaccount.google.com/permissions?pli=1">アカウントにアクセスできるアプリ</a>
  →アクセス権を削除
  

