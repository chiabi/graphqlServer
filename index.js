import express from "express";
import bodyParser from "body-parser";

const app = express();

app.get("/", (req, res) => {
  res.send("하하하호호호");
});
app.listen(3000, () => {
  console.log("서버가 시작되었습니다!");
});
