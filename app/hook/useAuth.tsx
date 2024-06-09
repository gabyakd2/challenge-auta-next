import { aplicationFirebase } from "@/app/credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useAuthLoggedContext } from "../context/AuthContext";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const firestore = getFirestore(aplicationFirebase);
const auth = getAuth(aplicationFirebase);

export function useAuth() {
  //Me traigo los estados globales de useAuthLoggedContext;
  const { userSesion, setUserSesion } = useAuthLoggedContext();

  const knowIsAdmin = async (uid: string) => {
    const docuRef = doc(firestore, `users/${uid}`)
    const docu = await getDoc(docuRef);
    const infoClean = docu.data()?.isAdmin;
    return infoClean;
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        knowIsAdmin(userFirebase.uid)
        .then((isAdmin) => {
          const userData = {
            userFirebase,
            isAdmin
          }
        setUserSesion(userData);
        })
      } else {
        setUserSesion(null);
      }
    });
  }, [])
  return { userSesion };
}
