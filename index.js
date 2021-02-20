//백엔드 만들 때 시작점
const express = require("express");
//express 외부에서 불러오기
const app = express();
const port = 5000;
const bodyParser = require("body-parser");

const config = require("./config/key");

const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true }));
//application/x-www-form-urlencoded

app.use(bodyParser.json());
//application/json

const mongoose = require("mongoose");
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    //사용하기에 앞서 에러 방지
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World! Wassup😎");
});
//root 디렉토리에 hello world 출력

app.post("/register", (req, res) => {
  //회원가입 시 필요한 정보들을 client에서 가져오면,
  //그것들을 데이터 베이스에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
