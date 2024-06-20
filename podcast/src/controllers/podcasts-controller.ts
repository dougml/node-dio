import { IncomingMessage, ServerResponse, request} from 'http';

import { sevicesListEpisodes } from '../services/list-episodes';

export const getListEpisodes = async (
    req: IncomingMessage,
     res: ServerResponse
    ) => {

        const content: await sevicesListEpisodes(req, res)

    res.writeHead(200,{'Content-Type': "aplication/json"});
    res.end(JSON.stringify(content))
}