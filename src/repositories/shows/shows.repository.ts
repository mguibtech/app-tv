import { ShowModel } from "../../common/models/show.model";
import { client } from "../api";
import { FetchShowsParams } from "./types";

export const fethShows = async ({page}: FetchShowsParams) => {
    const {data} = await client.get<Array<ShowModel>>("/shows", {params: {page}})
    return data;
}

