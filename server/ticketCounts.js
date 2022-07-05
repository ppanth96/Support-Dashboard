const express = require("express");
const bodyParser = require("body-parser");
const {
  planEnterprise,
  planMidmarket,
  firstResponse,
} = require("./tickets_info.js");
//ask how to get the path

const app = (module.exports = express());
app.use(bodyParser.json());

var axios = require("axios");

app.get("/", async (req, res) => {
  try {
    const plan_enterprise = await planEnterprise();
    const plan_midmarket = await planMidmarket();
    const plan_firstresponse = await firstResponse();
    res.send(
      `Total Tickets: ${plan_firstresponse} Total MidMarket: ${plan_midmarket} Total Enterprise: ${plan_enterprise}`
    );
  } catch (error) {
    console.error("Error Displaying data: ", error);
    res.status(400).json({ message: error });
  }
});

