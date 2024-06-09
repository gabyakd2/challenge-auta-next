import { aplicationFirebase } from "@/app/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAuthLoggedContext } from "../context/AuthContext";

const auth = getAuth(aplicationFirebase);

export function useAuth() {
  const { userSesion, setUserSesion } = useAuthLoggedContext();

  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUserSesion(userFirebase);
      } else {
        setUserSesion(null);
      }
    });
  }, [])
  return { userSesion };
}
