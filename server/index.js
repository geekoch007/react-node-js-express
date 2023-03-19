require("dotenv").config();

const express = require("express");
const db = require("./config/db");
const cors = require("cors");

const app = express();

const PORT = 8081;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express API version 1");
});

// route to get all product
app.get("/api/getProducts", function (req, res) {
  db.query(
    "select * from products where published = 1 order by id desc",
    (err, result) => {
      if (err) {
        console.log(err);
      }
      res.send(result);
    }
  );
});

// route to single blog
app.get("/api/blog/:id", function (req, res) {
  const id = req.params.id;
  db.query("select * from blog where id = ?", id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result ? result[0] : null);
  });
});

app.get("/api/blog", function (req, res) {
  const { page, size } = req.query || {};
  const limit = size ? +size : 10;
  const offset = page ? limit * (page - 1) : 0;

  db.query("select count(*) as total from blog", (countErr, countRes) => {
    const { total } = countRes ? countRes[0] : { total: 0 };

    db.query(
      `select id, title, date, img, auther, link from blog LIMIT ? OFFSET ?`,
      [limit, +offset],
      (err, result) => {
        if (err) {
          console.log(err);
        }
        res.send({
          total,
          items: result,
        });
      }
    );
  });
});

app.post("/api/blog", function (req, res) {
  res.json({
    ...req.body,
    message: "saved from server",
  });

  // db.query('select * from blog', (err, result) => {
  //   if (err) {
  //     console.log(err);
  //   }
  //   res.send(result);
  // });
});

app.use(express.static("public"));

app.listen(PORT, function () {
  console.log(`Server is running on ${PORT}`);
});
