const express = require("express");
const connection = require("./Configs/db");
const Beauty = require("./Models/beauty");
const Men = require("./Models/mens");
const Women = require("./Models/womens");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ---For Beauty query fetching the Beauty Cluster----

app.get("/beauties", async (req, res) => {
  // _page=${page}&_limit=16
  const _limit = 12;
  // const count = await Beauty.countDocuments();
  const { _page } = req.query;
  const currPage = Number(_page) || 1;
  const skip = _limit * (currPage - 1);

  try {
    const data = await Beauty.find().limit(_limit).skip(skip);
    return res.status(201).send(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

// ---For mens query fetchingn the Mens dataset Collections-------

app.get("/mens", async (req, res) => {

  const _limit = 12;

  const { _page } = req.query;
  const currPage = Number(_page) || 1;
  const skip = _limit * (currPage - 1);

  try {

    const data = await Men.find().limit(_limit).skip(skip);
    return res.status(201).send(data);

  } catch (err) {
    res.json({ message: err.message });
  }
});

// ---For womens section query fetchingn the Womesn dataset Collections-------

app.get("/womens", async (req, res) => {
  const _limit = 12;

  const { _page } = req.query;
  const currPage = Number(_page) || 1;
  const skip = _limit * (currPage - 1);

  try {

    const data = await Women.find().limit(_limit).skip(skip);
    return res.status(201).send(data);

  } catch (err) {

    res.json({ message: err.message });

  }
});


// ---Listening on port 8080 ----
const PORT = 8080;
app.listen(PORT, async () => {
  try {
    await connection;
    console.log("connection established");

  } catch (err) {

    console.log({ message: err.message });

  }
  console.log("listening on port " + PORT);
});
