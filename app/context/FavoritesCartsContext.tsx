"use client"
import { ReactNode, createContext, useContext, useState } from "react";

interface IContextType {
  favorites: Record<string, boolean>;
  setFavorite: (id: string, value: boolean) => void;
}

const FavoriteContext = createContext<IContextType | undefined >(undefined)

interface ProviderProps {
  children: ReactNode;
}

function FavoritesProvider({children}: ProviderProps) {
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const setFavorite = (id: string, value: boolean) => {
    setFavorites(prevFavorites => ({
      ...prevFavorites,
      [id]: value,
    }));
  };
  return (
    <FavoriteContext.Provider value={{favorites, setFavorite}}>
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