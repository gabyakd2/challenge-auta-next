"use client"
import HeaderHome from "./components/headerHome/HeaderHome";
import CardList from "./components/cardList/CardList";
import { useAuth } from "@/app/hook/useAuth";
import { useSignOut } from "@/app/hook/useSignOut";

function HomeMain() {
  const {username} = useAuth();
  const { error, handleSignOut } = useSignOut();

console.log(username)
  return (
    <div>
      <HeaderHome />
      <CardList />
      <button onClick={handleSignOut}>Logout</button>
      {error && <p>Error: {error}</p>}
    </div>
  )
}

export default HomeMain