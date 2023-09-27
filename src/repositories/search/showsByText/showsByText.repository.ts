import { ShowByTextModel } from '../../../common/models/showByText.model';
import { client } from '../../api'
import { FetchShowsByTextParams } from './types'

export const fetchShowByText = async ({ q }: FetchShowsByTextParams) => {
    const {data} = await client.get<ShowByTextModel[]>(`/search/shows`, {
        params: {
            q,
        }
    })
    return data;
}