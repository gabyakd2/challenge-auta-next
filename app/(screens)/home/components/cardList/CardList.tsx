"use client"
import React from "react";
import { IDataCard } from "@/app/interfaces/IDataCard";
import { useGetVehiclesList } from "@/app/hook/useGetVehicleList";
import CardVehicle from "../cardVehicle/CardVehicle";
import styles from "./card-list.module.css";

function CardList() {
  const { listVehicles, loading, error } = useGetVehiclesList();
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <div className={styles.containerMainCardList}>
      <div className={styles.gridListCard}>
        {
          listVehicles?.map(({id, imageCard, titleCard, descr1, descr2, descr3, descr4}: IDataCard) => (
            <div key={id}>
              <CardVehicle 
                imageCard={imageCard} 
                titleCard={titleCard} 
                descr1={descr1} 
                descr2={descr2} 
                descr3={descr3} 
                descr4={descr4} />
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default CardList;
