'use strict'

const express = require("express"),
    router = require("./routes/index"),
    app = express(),
    layouts = require("express-ejs-layouts");

app.set("port", process.env.PORT || 3000);

app.use(layouts);

// ミドルウェア関数を定義
app.use((req, res, next) => {
  // リクエストのパスをログに出す
  console.log(`request made to: ${req.url}`);
  next(); // next 関数を呼び出す
});

// URL エンコードされたデータを解析する
app.use(
    express.urlencoded({
      extended: false
    })
);

app.use(express.json());

app.use(express.static("public"));

app.set("view engine", "ejs");

// ホームページ用に新しい POST 経路を作る
app.post("/", (req, res) => {
  console.log(req.body); // リクエスト本文をロギング
  console.log(req.query);
  res.send("POST Successful!");
});

app.use("/", router);

// ポート 3000 を監視するようにアプリケーションを設定
app.listen(app.get("port"), () => {
  console.log(`The Express.js server has started and is listening on port number: ${app.get("port")}`);
});