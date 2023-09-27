import { CastCreditModel } from '../../common/models/cast.credits.model'
import { client } from '../api'
import { FetchPersonParams } from './types'

export const fetchCastCreditsByPerson = async ({personId} : FetchPersonParams) => {
    const {data} = await client.get<CastCreditModel[]>(`/people/${personId}/castcredits?embed=show`)
    return data;
}