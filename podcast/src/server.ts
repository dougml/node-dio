import * as http from "http";
import dotenv from 'dotenv';
import { getListEpisodes } from "./controllers/podcasts-controller"

dotenv.config();

const port = process.env.PORT

const server = http.createServer(
    async (req: http.IncomingMessage, res: http.ServerResponse)=>{

    if (req.method === "GET") {
        await getListEpisodes(req, res)
        
    }


})

server.listen(port,()=>{
    console.log(`Servidor Rodando na porta ${port}`)
})