import React from "react"
import { FavoritesShowState, FavoritesShowsContextProps, FavoritesShowsProps } from "./types"
import { ShowModel } from "../../models/show.model";

export const FavoritesShowsContext =
    React.createContext<FavoritesShowsContextProps>(
        {} as FavoritesShowsContextProps
    );

export const FavoritesShows = ({children}: FavoritesShowsProps) =>{
    /**
     * States
     */
     const [favoritesShows, setFavoriteShows] = React.useState<FavoritesShowState>({});

     /**
      * Callbacks
      */

     const addFavoriteShow = (show: ShowModel) => {
        setFavoriteShows((prevState) => ({
            ...prevState,
            [show.id] : show
        }))
     }

     const removeFavoriteShow = (showId: number|string) => {
        setFavoriteShows((prevState) => {
            const {[showId]: _, ...rest} = prevState;
            return rest;
        })
     }

     return (
        <FavoritesShowsContext.Provider value={{addFavoriteShow, favoritesShows, removeFavoriteShow}}>
            {children}
        </FavoritesShowsContext.Provider>
     )
}


