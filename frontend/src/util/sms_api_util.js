const axios = require("axios");

export const sendMessage = data => {
  return axios.post("/api/users/sendmessage", data).then(res => console.log(res));
};