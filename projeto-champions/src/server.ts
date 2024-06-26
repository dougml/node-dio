import express from "express";
import createApp from "./app";
import 'dotenv/config';


const app = createApp();
const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Servidor rodando em: http://localhost:${port}`);
});
