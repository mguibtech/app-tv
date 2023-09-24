import { EpisodeModel } from "../../models/episode.model";

export interface EpisodeCardPros {
    episode: EpisodeModel;
    onPress?: () => void;
}