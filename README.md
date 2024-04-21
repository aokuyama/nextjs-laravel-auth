# nextjs-laravel

hostに以下のように設定

```
127.0.0.1       web.test.local
127.0.0.1       next.test.local
```

・Laravelのページ  
http://web.test.local/


・Next.jsのページ  
http://web.test.local/login-next

のように、パスによってLaravelのページとNext.jsのページを出し分けます。

ルーティングの設定はこちら  
https://github.com/aokuyama/nextjs-laravel/blob/main/docker/proxy/web.test.local

http://web.test.local/login-next  
からログインするとLaravelのセッションとAuth.jsのセッションが同時に作られ、
ログイン状態でを維持したままLaravelとNextのページを行き来できます


ログイン状態でのみアクセスできるLaravelのページ  
http://web.test.local/home

ログイン状態でのみアクセスできるNextのページ  
http://web.test.local/dashboard
