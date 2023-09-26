import { useEffect, useState } from "react"
import { SeasonModel } from "../../common/models/season.model"
import { EpisodeModel } from "../../common/models/episode.model"
import { DetailProps } from "./types"
import { fetchSeasons } from "../../repositories/seasons/seasons.repository"
import { fetchEpisodesBySeason } from "../../repositories/episodes/episodes.repository"

export const useDetailController = ({show}: DetailProps) => {
    /**
     * States
     */
    const [moreSummary, setMoreSummary] = useState(false)
    const [seasons, setSeasons] = useState<SeasonModel[]>([]);
    const [selectedSeason, setSelectedSeason] = useState<SeasonModel>();
    const [episodes, setEpisodes] = useState<EpisodeModel[]>([])
    
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
    
    
    return{moreSummary, episodes, seasons, selectedSeason}
}