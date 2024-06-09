import { aplicationFirebase } from "@/app/credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";

const auth = getAuth(aplicationFirebase);
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.error(error)
});

export function useAuth() {
  const [username, setUsername] = useState<unknown>(null);
  useEffect(() => {
    onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUsername(userFirebase);
      } else {
        setUsername(null);
      }
    });
  }, [])
  return { username };
}
