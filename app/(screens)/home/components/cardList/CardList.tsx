"use client"
import React from "react";
import { IDataCard } from "@/app/interfaces/IDataCard";
import { useGetVehiclesList } from "@/app/hook/useGetVehicleList";
import CardVehicle from "../cardVehicle/CardVehicle";
import styles from "./card-list.module.css";
import { useFavoriteContext } from "@/app/context/FavoritesCartsContext";
// import { getListVehicles } from "./getListVehicles";

interface IProps {
  filters: {selectTypeCard: string };
}

 function CardList({filters}: IProps) {

  const { setFavorites } = useFavoriteContext()
   // const vehiclesList = await getListVehicles();
   const { listVehicles } = useGetVehiclesList();
    const filterVehicles = listVehicles.filter(vehicle => (
      filters.selectTypeCard === "todos" || vehicle.selectTypeCard?.toLowerCase() === filters.selectTypeCard
    ))

    const addCarToFavorite = (car: IDataCard) => {
      setFavorites((prevState) => [...prevState, car]);
    }

    const removeCarFromFavorite = (id: string) => {
      setFavorites((prevFavorites) => {
        return prevFavorites.filter((car) => car.id !== id);
      });
    }

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
                addCarToFavorite={addCarToFavorite}
                removeCarFromFavorite={removeCarFromFavorite}
                />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardList;
