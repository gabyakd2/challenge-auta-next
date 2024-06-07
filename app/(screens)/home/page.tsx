"use client"
import { useState } from "react";
//Importaciones de firebase
import { aplicationFirebase } from "@/app/credentials";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
const auth = getAuth(aplicationFirebase);
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.error(error)
});

function HomeMain() {
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
      <p>HOME</p>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default HomeMain