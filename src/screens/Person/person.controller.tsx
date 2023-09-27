import { useEffect, useState } from "react"
import { PersonModel } from "../../common/models/person.model"
import { CastCreditModel } from "../../common/models/cast.credits.model"
import { fetchCastCreditsByPerson } from "../../repositories/people/people.repository";

export const usePersonController = ({person}: {person: PersonModel}) => {

    const [castCredts, setCastCredts] = useState<CastCreditModel[]>([]);

    useEffect(() => {
        if(person){
            fetchCastCreditsByPerson({personId: person.id}).then((data) => {
                setCastCredts(data)
            })
        };

    },[person]);

    return{castCredts}
}