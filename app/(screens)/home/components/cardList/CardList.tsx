"use client"
import React from "react";
import { IDataCard } from "@/app/interfaces/IDataCard";
import { useGetVehiclesList } from "@/app/hook/useGetVehicleList";
import CardVehicle from "../cardVehicle/CardVehicle";
import styles from "./card-list.module.css";
// import { getListVehicles } from "./getListVehicles";

interface IProps {
  filters: {selectTypeCard: string };
}

 function CardList({filters}: IProps) {

   // const vehiclesList = await getListVehicles();
   const { listVehicles } = useGetVehiclesList();
    const filterVehicles = listVehicles.filter(vehicle => (
      filters.selectTypeCard === "todos" || vehicle.selectTypeCard?.toLowerCase() === filters.selectTypeCard
    ))
  return (
    <div className={styles.containerMainCardList}>
      <div className={styles.gridListCard}>
        {
          filterVehicles?.map(({id, imageCard, titleCard, descr1, descr2, descr3, descr4, isFavorite}: IDataCard) => (
            <div key={id}>
              <CardVehicle 
                id={id}
                imageCard={imageCard} 
                titleCard={titleCard} 
                descr1={descr1} 
                descr2={descr2} 
                descr3={descr3} 
                descr4={descr4} 
                isFavorite={isFavorite}
                />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardList;
