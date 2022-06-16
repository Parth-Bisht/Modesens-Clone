const express = require("express");
const connection = require("./Configs/db");
const Beauty = require("./Models/beauty");
const Men = require("./Models/mens");
const Women = require("./Models/womens");
const app = express();

const cors = require("cors");
app.use(cors({ origin: ["http://localhost:8080"] }));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());




// Client makes request for most recent items: GET /items?limit=20
// On scroll/next page, client makes second request GET /items?limit=20&offset=20
// On scroll/next page, client makes third request GET /items?limit=20&offset=40


app.get("/beauties", async (req, res) => {
  // _page=${page}&_limit=16
  const _limit=10;
  const{_page} = req.query;
  const currPage = Number(_page) || 1;
  const skip = _limit*(currPage-1);

  try {
    const data = await Beauty.find().limit(_limit).skip (skip)
    return res.status(201).send(data);

  } catch (err) {
    res.json({ message: err.message });
  }
});

app.get("/mens", async (req, res) => {
  const _limit=10;
  const{_page} = req.query;
  const currPage = Number(_page) || 1;
  const skip = _limit*(currPage-1);


  try {
    const data = await Men.find().limit(_limit).skip (skip)
    return res.status(201).send(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.get("/womens", async (req, res) => {
  const _limit=10;
  const{_page} = req.query;
  const currPage = Number(_page) || 1;
  const skip = _limit*(currPage-1);


  try {
    const data = await Women.find().limit(_limit).skip (skip)
    return res.status(201).send(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

const PORT = 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log({ message: err.message });
  }

  console.log("listening on port" + PORT);
});
