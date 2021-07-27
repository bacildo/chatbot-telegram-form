require("dotenv").config();
import express from "express";
import configViews from "./config/configView";
import rotasTelegram from "./routes/rotas";

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViews(app);

rotasTelegram(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is running at the port ${port}`);
});
