const config = require("./index");
var axios = require("axios");

async function ticketSolved(support_agents) {
  var list = [];
  const promises = support_agents.map((agent_info) => {
    return axios
      .get(agent_info.url, config.configuration)
      .then(function (response) {
        const data = {
          agent: agent_info.name,
          tickets_solved: response.data.count,
        };
        list.push(data);
      });
  });
  return Promise.all(promises).then((data) => {
    return list;
  });
}

async function supportAgents() {
  try {
    var url = "https://d1support.zendesk.com/api/v2/groups/360008788134/users";
    return axios.get(url, config.configuration).then(function (response) {
      var data = response.data.users;
      var list = [];
      for (var agents of data) {
        const postdata = {
          id: agents.id,
          url:
            "https://d1support.zendesk.com/api/v2/search/count?query=type:ticket assignee:" +
            agents.id +
            " solved>2022-03-31T23:59:59-08:00 solved<2022-06-30T23:59:59-08:00 group_id:360011977974 group_id:360010362353 group_id:21016063 group_id:360008758873 group_id:4414720248855 group_id:28429088 group_id:20032183 group_id:28429118 group_id:360001122893 group_id:360011928093 group_id:22766503 group_id:128337 group_id:1500003743622 group_id:360008788134",
          name: agents.name,
        };
        list.push(postdata);
      }
      return list;
    });
  } catch (e) {
    console.warn(e);
  }
}

module.exports = {
  supportAgents,
  ticketSolved,
};
