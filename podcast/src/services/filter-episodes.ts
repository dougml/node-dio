import { FilterPodCastModel } from "../models/filter-podcast-model"
import { repositoryPodcast } from "../repositories/podcast-repositories"
import { StatusCode } from "../utils/status-code"

export const serviceFilterEpisodes = async (podcastName : string | undefined) => {

    let responseFormat : FilterPodCastModel = {
        statusCode : 0,
        body: []
    }

    const queryString = podcastName?.split('?p=')[1] ?? ''

    const data = await repositoryPodcast(queryString)

    responseFormat.statusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NOCONTENT
    
    responseFormat.body = data
 return responseFormat

}


