# nextjs-laravel-auth

## 初期設定
`/etc/hosts`に以下のように設定

```
127.0.0.1       web.test.local
127.0.0.1       next.test.local
```

コンテナの立ち上げ
```
docker compose up -d
```

## 機能

- Laravelのページ  
https://web.test.local/


- Next.jsのページ  
https://web.test.local/next

のように、パスによってLaravelのページとNext.jsのページを出し分けます。

#### ルーティングの設定はこちら  
https://github.com/aokuyama/nextjs-laravel-auth/blob/main/docker/proxy/web.test.local

### 認証の仕様詳細
Next.jsかつログイン状態でしかアクセスできないページに遷移すると、  
以下のような挙動になります

##### Laravelセッションある & Authjsのセッションある
- 何も起きない（そのままページアクセスできる）

##### Laravelセッションある & Authjsのセッションない
- Next.jsのログイン画面へリダイレクト
  - emailやpasswordは入れず続行ボタンを押すのみ
    - 続行ボタンを押したら元の画面にリダイレクトされる
  - LaravelのセッションをもとにAuthjsのセッションが作成される

##### Laravelセッションない & Nextのセッションある
- Authjsのセッション破棄し、Laravelのログイン画面へリダイレクト
  - あくまでLaravelのセッションをベースとするため

##### Laravelセッションない & Nextのセッションない
- Laravelのログイン画面へリダイレクト

#### 参考

- ゲストでもアクセスできるNext.jsのページ  
https://web.test.local/next

- ログイン状態でのみアクセスできるNextのページ  
https://web.test.local/dashboard
