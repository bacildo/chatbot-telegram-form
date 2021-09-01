import request from "request";

require("dotenv").config();

let sendNotification = (user) => {
  return new Promise((resolve, reject) => {
    try {
      let TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
      let TELEGRAM_GROUP_ID = process.env.TELEGRAM_GROUP_ID;

      let data = {
        chat_id: TELEGRAM_GROUP_ID,
        parse_mode: "HTML",
        text: `Nome: <b>${user.name}</b>
Email: <b>${user.email}</b>
Empresa: <b>${user.empresa}</b>
Descrição: <b>${user.description}</b>
`,
      };

      request(
        {
          uri: `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
          method: "POST",
          json: data,
        },
        function (err, res, body) {
          if (!err) {
            resolve("Enviado com sucesso!");
          } else {
            console.log(err);
            reject(err);
          }
        }
      );
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  sendNotification: sendNotification,
};
