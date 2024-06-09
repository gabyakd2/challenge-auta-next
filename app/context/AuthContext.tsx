"use client"
import { Dispatch, ReactNode, createContext, useContext, useState } from "react";

interface IContextType {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  userSesion: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setUserSesion: Dispatch<React.SetStateAction<any>>;
}

const AuthContext = createContext<IContextType | undefined >(undefined)

interface ProviderProps {
  children: ReactNode;
}

function AuthLoggedProvider({children}: ProviderProps) {
  const [userSesion, setUserSesion] = useState<IContextType | undefined>(undefined)
  return (
    <AuthContext.Provider value={{userSesion, setUserSesion}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuthLoggedContext() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuthLogged must be used within a AuthLoggedProvider")
  }
  return context
}

export { AuthLoggedProvider, useAuthLoggedContext }