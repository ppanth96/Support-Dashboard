const config = require("./index");
const axios = require("axios");

async function planEnterprise() {
  try {
    return new Promise((resolve, reject) => {
      var url =
        "https://d1support.zendesk.com/api/v2/search/count.json?query=type:ticket status:open type:group group_id:20032183 tags:plan_enterprise assignee:none";
      axios
        .get(url, config.configuration)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          resolve(JSON.stringify(response.data.count));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  } catch (e) {
    console.warn(e);
  }
}

async function planMidmarket() {
  try {
    return new Promise((resolve, reject) => {
      var url =
        "https://d1support.zendesk.com/api/v2/search/count.json?query=type:ticket status<pending type:group group_id:20032183 group_id:128337 tags:plan_mid_market assignee:none";
      axios
        .get(url, config.configuration)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          resolve(JSON.stringify(response.data.count));
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  } catch (e) {
    console.warn(e);
  }
}

async function firstResponse() {
  try {
    return new Promise((resolve, reject) => {
      var url =
        "https://d1support.zendesk.com/api/v2/search/count.json?query=type:ticket status<pending group_id:128337 group_id:360008758873 group_id:20032183 assignee:none";
      axios
        .get(url, config.configuration)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          resolve(response.data.count);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  } catch (e) {
    console.warn(e);
  }
}

async function onAgents() {
  try {
    return new Promise((resolve, reject) => {
      var url =
        "https://rtm.zopim.com/stream/agents";
      axios
        .get(url, config.chatconfiguration)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          resolve(response.data.content.data.agents_online);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  } catch (e) {
    console.warn(e);
  }
}

async function incomingChats() {
  try {
    return new Promise((resolve, reject) => {
      var url =
        "https://rtm.zopim.com/stream/chats";
      axios
        .get(url, config.chatconfiguration)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          resolve(response.data.content.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    });
  } catch (e) {
    console.warn(e);
  }
}

module.exports = {
  planEnterprise,
  planMidmarket,
  firstResponse,
  onAgents,
  incomingChats
};
