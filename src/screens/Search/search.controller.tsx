import {useCallback, useDebugValue, useEffect, useState} from "react";
import { ShowByTextModel } from "../../common/models/showByText.model";
import { PeepleByTextModel } from "../../common/models/peopleByText.model"
import { FetchPeopleByTextParams } from "../../repositories/search/peopleByText/types";
import { fetchShowByText } from "../../repositories/search/showsByText/showsByText.repository";
import { fetchPeopleByText } from "../../repositories/search/peopleByText/peopleByText.repository";
import { useDebouncedCallback } from "use-debounce";


export const useSearchController = () => {
    /**
     * States
     */

    const [shows, setShows] = useState<ShowByTextModel[]>([]);
    const [people, setPeople] = useState<PeepleByTextModel[]>([]);
    const [searchText, setSearchText] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [searchType, setSearchType] = useState<"peeple" | "show">("peeple")

    /**
     * Calbacks
     */

    const handleSearchShows = useCallback(async( search?: string ) => {
        if(!search){
            setShows([])
            return
        }
        try{
            setLoading(true)
            const response = await fetchShowByText({q: search})
            setShows(response)
        }catch (error){
            console.log("O erro que ocoreu na buscar por show foi " + error)
        }finally{
            setLoading(false)
        }
    }, [])

    const handleSearchPeople = useCallback(async( search?: string ) => {
        if(!search){
            setPeople([])
            return
        }
        try{
            setLoading(true)
            const response = await fetchPeopleByText({q: search})
            setPeople(response)
        }catch (error){
            console.log("O erro que ocoreu na buscar por show foi " + error)
        }finally{
            setLoading(false)
        }
    }, []);

    /**
     * Debounce
     */
    const debounceSearchShows = useDebouncedCallback(handleSearchShows, 700);
    const debounceSearchPeople = useDebouncedCallback(handleSearchPeople, 700);


    /**
     * Effects
     */

    useEffect(() => {
        if(searchText.length === 0){
            debounceSearchShows()
            debounceSearchPeople()
        }
    },[searchText, debounceSearchShows, debounceSearchPeople])

    useEffect(() => {
        if(searchText.length > 0){
            debounceSearchShows(searchText)
            debounceSearchPeople(searchText)
        }
    },[searchText, debounceSearchShows, debounceSearchPeople])


    return {
        searchText,
        setSearchText,
        shows,
        people,
        loading,
        searchType,
        setSearchType,
    };
}