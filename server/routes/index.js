import express from "express";
import { getBookDetail, getBookList, getMovieList } from "../apis/naver.js";
let router = express.Router();

/* GET home page. */
// return render
// 그냥 index만 써도 views 폴더의 index를 의미한다.
// 이게 가능한게 app.js의 app.set(views와 view engine) 부분 덕분이다.
router.get("/", function (req, res, next) {
  res.render("index", { title: "React" });
});

router.get("/movie", async function (req, res, next) {
  const result = await getMovieList(req.query);
  console.log(result);
  res.send(result);
});

router.get("/book", async function (req, res, next) {
  const result = await getBookList(req.query);
  // console.log(result);
  res.send(result);
});

router.get("/book/:isbn", async function (req, res, next) {
  const { isbn } = req.params;
  const params = {
    d_isbn: isbn,
  };
  const result = await getBookDetail(params);
  // console.log(result);
  res.send(result);
});

export default router;
