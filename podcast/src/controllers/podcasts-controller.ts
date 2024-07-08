import { IncomingMessage, ServerResponse } from 'http';
import { sevicesListEpisodes } from '../services/list-episodes';
import { serviceFilterEpisodes } from '../services/filter-episodes';
import { StatusCode } from '../utils/status-code';


export const getListEpisodes = async (
    req: IncomingMessage,
    res: ServerResponse
) => {
    try {
        const content = await sevicesListEpisodes();

        res.writeHead(content.statusCode, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify(content.body));
    } catch (error) {
        res.writeHead(StatusCode.NOTFOUND, {
            "Content-Type": "application/json"
        });
        res.end(JSON.stringify({ error: 'Internal Server Error' }));
    }
};

export const getFilterEpisodes = async (   req: IncomingMessage,
    res: ServerResponse
)=>{

    const content = await serviceFilterEpisodes(req.url)
    
    res.writeHead(content.statusCode, {
        "Content-Type": "application/json"
    });

    res.end(JSON.stringify(content.body));
}

