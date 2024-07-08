import { FilterPodCastModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcast-repositories";
import { StatusCode } from "../utils/status-code";

export const sevicesListEpisodes = async ()=>{
    let responseFormat : FilterPodCastModel = {
        statusCode : 0,
        body: []
    }
    
    const data = await repositoryPodcast()

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT
    
    responseFormat.body = data
    
    return responseFormat
};