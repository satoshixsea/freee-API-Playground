# freee-API-Playground

<a href="https://accounts.secure.freee.co.jp/public_api/authorize?client_id=c5f4e365ce4dee9df3d8ecb0d99794b77ebba3624f90db02de0c8cc58bab3c72&redirect_uri=https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbzcDPjC5EbWBNO15UlYei9yXAbfB96hVByUyhBbr4nVh4xgLA4e%2Fexec&response_type=code">freeeと連携する</a>
<br>

<img src="https://user-images.githubusercontent.com/5506377/86060895-ab517f00-baa0-11ea-985e-5c5ae7045478.png" width="360px">

## 利用方法

※この連携アプリを利用するためにはGoogleアカウントが必要です

### このアプリについて
- freee APIをいつでもすぐに試せる環境を手元に作れます
- Google Apps ScriptのUser Propertiesにfreeeの認証情報が保存されます<br>
  →認証情報：アクセストークンやリフレッシュトークン等
- ソースコードはこのリポジトリに公開しています



### 連携方法

事前に別のタブでfreeeにログインしておいてください →<a href="https://accounts.secure.freee.co.jp/login/accounting?a=false&e=0&o=true">ログインはこちら</a>

1. <a href="https://accounts.secure.freee.co.jp/public_api/authorize?client_id=c5f4e365ce4dee9df3d8ecb0d99794b77ebba3624f90db02de0c8cc58bab3c72&redirect_uri=https%3A%2F%2Fscript.google.com%2Fmacros%2Fs%2FAKfycbzcDPjC5EbWBNO15UlYei9yXAbfB96hVByUyhBbr4nVh4xgLA4e%2Fexec&response_type=code">freeeと連携する</a> をクリック
2. freeeのデータを読み書きする権限をアプリに許可する
3. Googleアカウントにアプリの実行を許可する
<img src="https://user-images.githubusercontent.com/5506377/86063934-ea82ce80-baa6-11ea-9a63-41549ca4f541.png" width="600px">


### 使い方
- 会計freee / 人事労務freeeを選択します
- requestにcompaniesなどのリソースやパラメータを入れてGETボタンをクリックします
  - POST / PUT / DELETEを行う際はpayloadにJSONを入れて各ボタンをクリックします
- レスポンスヘッダも取得したい時は with headers をチェックします
- token refresh：アクセストークンを更新
- your accesstoken：保存されている最新のアクセストークンを表示
<img src="https://user-images.githubusercontent.com/5506377/86063949-f2427300-baa6-11ea-942e-b898d3583a2f.png" width="600px">


### 注意事項
- 指定した事業所のデータを実際に読み書きします
- テスト環境で試すことをおすすめします
- Google Apps Scriptには1日の利用回数や利用量に制限があり、上限を超えると利用できなくなります→<a href="https://developers.google.com/apps-script/guides/services/quotas">Quotas</a>

### 連携解除方法
- freeeの連携を解除する<br>
  →<a href="https://app.secure.freee.co.jp/applications">マイアプリ一覧</a>
  →連携解除
- Googleアカウントの実行許可を削除する<br>
  →<a href="https://myaccount.google.com/permissions?pli=1">アカウントにアクセスできるアプリ</a>
  →アクセス権を削除
  

### ライセンス
<a href="https://github.com/satoshixsea/freee-API-Playground/blob/master/LICENSE">BSD 2-Clause "Simplified" License</a>

