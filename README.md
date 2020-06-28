# freee-API-Playground-for-GAS

<a href="https://accounts.secure.freee.co.jp/public_api/authorize?client_id=c5f4e365ce4dee9df3d8ecb0d99794b77ebba3624f90db02de0c8cc58bab3c72&redirect_uri=https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbzcDPjC5EbWBNO15UlYei9yXAbfB96hVByUyhBbr4nVh4xgLA4e%2Fexec&response_type=code">freeeと連携する</a>
<br>

<img src="https://user-images.githubusercontent.com/5506377/85730917-039d1f80-b735-11ea-9e95-a6cd09653bc2.png" width="360px">

## 利用方法

※この連携アプリを利用するためにはGoogleアカウントが必要です

### このアプリについて
- freee APIをいつでもすぐに試せる環境を手元に作れます
- Google Apps ScriptのUser Propertiesにfreeeの認証情報が保存されます<br>
  →アクセストークンやリフレッシュトークンの情報がGoogleアカウントに保存されます
- GitHubのソースコードをクローンしてfreeeアプリを作成すれば自由にカスタマイズできます



### 連携方法

事前に別のタブでfreeeにログインしておいてください →<a href="https://accounts.secure.freee.co.jp/login/accounting?a=false&e=0&o=true">ログインはこちら</a>

1. <a href="https://accounts.secure.freee.co.jp/public_api/authorize?client_id=c5f4e365ce4dee9df3d8ecb0d99794b77ebba3624f90db02de0c8cc58bab3c72&redirect_uri=https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbzcDPjC5EbWBNO15UlYei9yXAbfB96hVByUyhBbr4nVh4xgLA4e%2Fexec&response_type=code">freeeと連携する</a> をクリック
2. freeeのデータを読み書きする権限をアプリに許可する
3. Googleアカウントにアプリの実行を許可する
<img src="https://user-images.githubusercontent.com/5506377/85800872-b349b000-b77c-11ea-99e4-a79b6f15f1da.png" width="600px">


### 使い方
- 会計freee / 人事労務freeeを選択します
- requestにcompaniesなどのリソースやパラメータを入れてGETボタンをクリックします
  - POST / PUT / DELETEを行う際はpayloadにJSONを入れて各ボタンをクリックします
- レスポンスヘッダも取得したい時は with headers をチェックします
- token refresh：アクセストークンを更新
- your accesstoken：保存されている最新のアクセストークンを表示
<img src="https://user-images.githubusercontent.com/5506377/85800938-d1afab80-b77c-11ea-8edf-cc25a0e105f4.png" width="600px">


### 注意事項
- 指定した事業所のデータを実際に読み書きします
- テスト環境で試すことをおすすめします
- Google Apps Scriptには1日の利用回数や利用量に制限があり、上限を超えると利用できなくなります→<a href="https://developers.google.com/apps-script/guides/services/quotas">Quotas</a>

### 連携解除方法
- freeeの連携を解除する<br>
  →<a href="https://app.secure.freee.co.jp/developers/applications">マイアプリ一覧</a>
  →連携解除
- Googleアカウントの実行許可を削除する<br>
  →<a href="https://myaccount.google.com/permissions?pli=1">アカウントにアクセスできるアプリ</a>
  →アクセス権を削除
  

### ライセンス
<a href="https://github.com/satoshixsea/freee-API-Playground-for-GAS/blob/master/LICENSE">BSD 2-Clause "Simplified" License</a>

