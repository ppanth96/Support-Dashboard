// const express = require("express")
// const app = express()

// app.get("/entity", (req, res) => {
//   var config = {
//     method: "get",
//     url: "https://liveapi.yext.com/v2/accounts/me/entities?api_key=4c05bff970ef4ae7dfa75d46cf775fde&v=20220612",
//   };

//   axios(config)
//     .then(function (response) {
//       var data = response.data.response.entities;
//       var list = [];
//       for (var entity of data) {
//         list.push(entity.meta.id);
//       }
//       res.send(list);
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
// });
