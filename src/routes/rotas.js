import express from "express";
import homeController from "../controllers/homeController";

let router = express.Router();

let rotasTelegram = (app) => {
  router.get("/", homeController.homepage);
  router.post("/send-notification", homeController.sendNotification);
  router.post(
    "/send-notification-individual",
    homeController.sendNotificationIndividual
  );
  router.get("/confirmacao", homeController.paginaDeConfirmacao);
  return app.use("/", router);
};

module.exports = rotasTelegram;
