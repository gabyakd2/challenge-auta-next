"use client"
import HeaderHome from "./components/headerHome/HeaderHome";
import CardList from "./components/cardList/CardList";
import { useAuth } from "@/app/hook/useAuth";

function HomeMain() {
  const {username} = useAuth();

console.log(username)
  return (
    <div>
      <HeaderHome />
      <CardList />
      <button>Logout</button>
    </div>
  )
}

export default HomeMain