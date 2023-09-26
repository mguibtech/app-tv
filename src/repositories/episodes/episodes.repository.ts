import { client } from "../api";
import { FetchEpisodeBySeasonParam } from "./types";

export const fetchEpisodesBySeason = async ({ seasonId }: FetchEpisodeBySeasonParam) => {
    const {data} = await client.get(`/seasons/${seasonId}/episodes`);
    return data
}