const express = require("express");
const bodyParser = require("body-parser");
const {
  planEnterprise,
  planMidmarket,
  firstResponse,
  vmsActivity,
  openVms,
  onAgents,
  incomingChats,
  dudaStatus,
  ecwidStatus,
} = require("./tickets_info.js");
const { supportAgents, ticketSolved } = require("./scores.js");
const { sort_by } = require("./sort.js");
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
    const open_vms = await openVms();
    const vms_activity = await vmsActivity();
    const duda_status = await dudaStatus();
    const ecwid_status = await ecwidStatus();
    const ticket_data = [
      {
        first_response: plan_firstresponse,
        mid_market: plan_midmarket,
        enterprise: plan_enterprise,
        voicemails: open_vms,
        agents_online: vms_activity.agents_online,
        calls_waiting: vms_activity.calls_waiting,
        callbacks_waiting: vms_activity.callbacks_waiting,
        active_agents: online_agents,
        incoming_chats: incoming_chats.incoming_chats,
        active_chats: incoming_chats.active_chats,
        duda_status: duda_status,
        ecwid_status: ecwid_status,
      },
    ];
    res.send(ticket_data);
  } catch (error) {
    console.error("Error Displaying data: ", error);
    res.status(400).json({ message: error });
  }
});

app.get("/scores", async (req, res) => {
  try {
    const support_agents = await supportAgents();
    const ticket_solved = await ticketSolved(support_agents);
    res.send(ticket_solved.sort(
      sort_by("tickets_solved", true, parseInt)
    ));
  } catch (error) {
    console.error("Error Displaying data: ", error);
    res.status(400).json({ message: error });
  }
});
