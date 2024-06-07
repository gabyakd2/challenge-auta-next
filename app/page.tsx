"use client"
import { useState } from "react";
//Importaciones de firebase
import { aplicationFirebase } from "./credentials";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomeMain from "./(screens)/home/page";
const auth = getAuth(aplicationFirebase);

export default function Home() {
  const [username, setUsername] = useState<unknown>(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUsername(userFirebase);
    } else {
      setUsername(null);
    }
  });
  console.log(username)
  return (
    <div>
      <HomeMain />
    </div>
  );
}
