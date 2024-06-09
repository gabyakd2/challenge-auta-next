"use client"
import HeaderHome from "./components/headerHome/HeaderHome";
import CardList from "./components/cardList/CardList";
import ListFilters from "./components/listFilters/ListFilters";
// import { useGetVehiclesList } from "@/app/hook/useGetVehicleList";
import { useState } from "react";


function HomeMain() {
  // const { listVehicles } = useGetVehiclesList();
  // const [filterType, setFilterType] = useState<string>("todos");
  const [ filters, setFilters ] = useState({
    selectTypeCard: "todos"
  })
  // const filteredVehicles = listVehicles.filter(
  //   (vehicle) => filterType === "todos" || vehicle.selectTypeCard?.toLowerCase() === filterType
  // );
  return (
    <div>
      <HeaderHome />
      <ListFilters setFilters={setFilters} />
      <CardList filters={filters} />      
    </div>
  )
}

export default HomeMain