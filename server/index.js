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

  try {
    const data = await Beauty.find().limit (1) .skip (1)
    return res.status(201).send(data);

  } catch (err) {
    res.json({ message: err.message });
  }
});

app.get("/mens", async (req, res) => {
  try {
    const data = await Men.find();
    return res.status(201).send(data);
  } catch (err) {
    res.json({ message: err.message });
  }
});

app.get("/womens", async (req, res) => {
  try {
    const data = await Women.find();
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
