import { useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { aplicationFirebase } from "../credentials";

const auth = getAuth(aplicationFirebase);

export function useSignOut () {
  const [error, setError] = useState<string | null>(null);
  const handleSignOut = async () => {
    try {
      await signOut(auth)
    } catch (error) {
      setError("Error al cerrar sesión")
      console.error(error)
    }
  }
  return { error, handleSignOut }
}