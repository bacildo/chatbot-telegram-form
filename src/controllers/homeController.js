import telegramService from "../services/telegramService";

let homepage = (req, res) => {
  return res.render("homepage.ejs");
};
//envia a notificação dos dados para o serviço do telegram que envia para um grupo
let sendNotification = async (req, res) => {
  let user = {
    name: req.body.name,
    email: req.body.email,
    description: req.body.description,
    empresa: req.body.empresa,
  };
  await telegramService.sendNotification(user);

  //aqui ele retorna para o caminho do telegramService
  return res.redirect("/confirmacao");
};

let paginaDeConfirmacao = (req, res) => {
  return res.render("confirmacao.ejs");
};

module.exports = {
  homepage: homepage,
  sendNotification: sendNotification,
  paginaDeConfirmacao: paginaDeConfirmacao,
};
