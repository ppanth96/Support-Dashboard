const express = require("express");
const bodyParser = require("body-parser");
const {
  planEnterprise,
  planMidmarket,
  firstResponse,
  onAgents,
  incomingChats
  
} = require("./tickets_info.js");
//ask how to get the path

const app = (module.exports = express());
app.use(bodyParser.json());

var axios = require("axios");

app.get("/ticket", async (req, res) => {
  try {
    const plan_enterprise = await planEnterprise();
    const plan_midmarket = await planMidmarket();
    const plan_firstresponse = await firstResponse();
    const online_agents = await onAgents();
    const incoming_chats = await incomingChats();
    const ticket_data = [{
      "first_response": plan_firstresponse,
      "mid_market": plan_midmarket,
      "enterprise": plan_enterprise,
      "active_agents":online_agents,
      "incoming_chats":incoming_chats.incoming_chats,
      "active_chats":incoming_chats.active_chats
    }];
    res.send(ticket_data);
  } catch (error) {
    console.error("Error Displaying data: ", error);
    res.status(400).json({ message: error });
  }
});

