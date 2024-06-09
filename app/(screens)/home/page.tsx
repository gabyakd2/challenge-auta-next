"use client"
import HeaderHome from "./components/headerHome/HeaderHome";
import CardList from "./components/cardList/CardList";
import ListFilters from "./components/listFilters/ListFilters";
// import { useGetVehiclesList } from "@/app/hook/useGetVehicleList";
import { useState } from "react";


function HomeMain() {
  const [ filters, setFilters ] = useState({
    selectTypeCard: "todos"
  })

  return (
    <div>
      <HeaderHome />
      <ListFilters setFilters={setFilters} />
      <CardList filters={filters} />      
    </div>
  )
}

export default HomeMain