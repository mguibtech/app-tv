import { useEffect, useMemo, useState } from "react"
import { SeasonModel } from "../../common/models/season.model"
import { EpisodeModel } from "../../common/models/episode.model"
import { DetailProps } from "./types"
import { fetchSeasons } from "../../repositories/seasons/seasons.repository"
import { fetchEpisodesBySeason } from "../../repositories/episodes/episodes.repository"
import { removeHtmlFromString } from "../../common/utils/html"
import { noSumary } from "../../common/utils/message"
import { format } from "date-fns"

export const useDetailController = ({show}: DetailProps) => {
    /**
     * States
     */
    const [moreSummary, setMoreSummary] = useState(false)
    const [seasons, setSeasons] = useState<SeasonModel[]>([]);
    const [selectedSeason, setSelectedSeason] = useState<SeasonModel>();
    const [episodes, setEpisodes] = useState<EpisodeModel[]>([])

    /**
     * Memos
     */
    const summaryWithotHTML = useMemo(() => {
        if(show.summary){
            return removeHtmlFromString(show.summary)
        }

        return noSumary
    },[show])

    const formattedDate = useMemo(() => {
        if(show.status === 'Running'){
            return format(new Date(), 'PP')
        }else if(show?.ended){
            return format(new Date(show.ended), 'PP')
        }else{
            return 'N/A'
        }
    }, [show])

    const generes = useMemo(() => {
        return show.genres.join(", ")
    },[show])
    
    const schedule = useMemo(() => {
        const {days, time} = show.schedule;
        let schedule = "";

        if(days.length > 0){
            schedule = days.join(", ")
        }
        if(time.length > 0){
            schedule = ` - ${schedule} at ${time}`;
        }
        return schedule
    },[show])

    /**
     * Callback
     *
    */
    
    const toggleMoreSummary = () => setMoreSummary((old) => !old);
        
   /**
    * Effects
    */
    useEffect(() => {
        fetchSeasons({showId: show.id}).then(setSeasons);
    }, [show])

    useEffect(() => {
        if(seasons.length > 0){
            setSelectedSeason(seasons[0])
        }
    }, [seasons])

    useEffect(() => {
        if(selectedSeason){
            fetchEpisodesBySeason({seasonId: selectedSeason.id}).then(setEpisodes)
        }
    },[selectedSeason])
    
    
    return{
        moreSummary,
        formattedDate,
        generes,
        summaryWithotHTML,
        schedule,
        toggleMoreSummary,
        selectedSeason,
        episodes, 
        seasons, 
        setSelectedSeason
    }
}