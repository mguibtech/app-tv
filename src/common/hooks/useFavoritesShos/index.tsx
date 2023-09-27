import React, { useContext } from "react";
import { FavoritesShows, FavoritesShowsContext } from "../../contexts/FavoritesShows";
import { View } from "react-native";

export const useFavoritesShows = () => {
    const context = useContext(FavoritesShowsContext);
    if (!context) {
        throw new Error("useFavoritesShows must be used within a FavoritesShows provider");
    }
    return context
}