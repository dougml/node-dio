import express from "express";
import router from "./routes";
import cors from "cors";

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api/v1", router);

  const corsOptions = {
    origin: ["http://doug.doug.com", "http://gov.br"],
    methods: ["GET", "UPDATE"],
  };

  app.use(cors());

  return app;
}

export default createApp;
