import express from "express";
import cors from "cors";
import { menu } from "./data.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/all", (req, res) => {
  res.json({ data: menu });
});
app.get("/jjajang", (req, res) => {
  res.json({ data: menu.jjajang.count });
});
app.post("/jjajang", (req, res) => {
  menu.jjajang.count = menu.jjajang.count + 1;
  res.json({ data: "짜장 하나 주문 완료!" });
});
app.get("/tang", (req, res) => {
  res.json({ data: menu.tang.count });
});
app.post("/tang", (req, res) => {
  menu.tang.count = menu.tang.count + 1;
  res.json({ data: "탕수육 하나 주문 완료!" });
});
app.get("/dumpling", (req, res) => {
  res.json({ data: menu.dumpling.count });
});
app.post("/dumpling", (req, res) => {
  menu.dumpling.count = menu.dumpling.count + 1;
  res.json({ data: "만두 하나 주문 완료!" });
});
app.listen(3001, () => {
  console.log("중국집 서버 시작");
});
