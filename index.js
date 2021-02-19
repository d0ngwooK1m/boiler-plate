//백엔드 만들 때 시작점
const express = require("express");
//express 외부에서 불러오기
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb://dongwookim:F1r31sh0t%21@boilerplate-shard-00-00.oawti.mongodb.net:27017,boilerplate-shard-00-01.oawti.mongodb.net:27017,boilerplate-shard-00-02.oawti.mongodb.net:27017/test?ssl=true&replicaSet=atlas-dv67cc-shard-0&authSource=admin&retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      //사용하기에 앞서 에러 방지
    }
  )
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Wassup😎");
});
//root 디렉토리에 hello world 출력

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
