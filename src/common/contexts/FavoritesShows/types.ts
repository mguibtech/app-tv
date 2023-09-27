import React from "react";
import { ShowModel } from "../../models/show.model"

export type FavoritesShowState = {
    [key: string|number]: ShowModel
}

export interface FavoritesShowsContextProps {
    addFavoriteShow: (show: ShowModel) => void;
    removeFavoriteShow: (show: string|number) => void;
    favoritesShows: FavoritesShowState;
}

export interface FavoritesShowsProps {
    children: React.ReactNode;
}