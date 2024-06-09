"use client"
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { IDataCard } from "../interfaces/IDataCard";

//Definicion del tipo de datos que tendra el contexto
interface IContextType {
  favorites: IDataCard[];
  setFavorites: Dispatch<SetStateAction<IDataCard[]>>;
}

const FavoriteContext = createContext<IContextType | undefined >(undefined)

interface ProviderProps {
  children: ReactNode;
}

function FavoritesProvider({children}: ProviderProps) {
  const [favorites, setFavorites] = useState<IDataCard[]>([]);
  return (
    <FavoriteContext.Provider value={{favorites, setFavorites}}>
      {children}
    </FavoriteContext.Provider>
  )
}

function useFavoriteContext() {
  const context = useContext(FavoriteContext)
  if (context === undefined) {
    throw new Error("useAuthLogged must be used within a AuthLoggedProvider")
  }
  return context
}

export {FavoritesProvider, useFavoriteContext}