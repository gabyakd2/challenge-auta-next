import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
}).catch((error) => {
  console.error(error)
});


function HomeMain() {
  return (
    <div>
      <p>HOME</p>
      <button onClick={() => signOut(auth)}>Logout</button>
    </div>
  )
}

export default HomeMain