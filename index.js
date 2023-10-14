const express = require("express");
const cors = require("cors");
const { getProvince, getCity, postCost } = require("./utils/api");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/province", async (req, res) => {
  try {
    const response = await getProvince;
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      result: error,
    });
  }
});

app.get("/city/:province", async (req, res) => {
  const idProvince = req.params.province;
  try {
    const response = await getCity(idProvince);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      result: error,
    });
  }
});

app.post("/cost", async (req, res) => {
  try {
    const data = req.body;

    const response = await postCost(data);
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json(response);
  } catch (error) {
    return res.status(400).json({
      result: error,
    });
  }
});

app.listen(5171, () => {
  console.log("Listening on port 5171");
});
