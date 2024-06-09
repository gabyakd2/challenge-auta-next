
import React from "react";
import { IDataCard } from "@/app/interfaces/IDataCard";
// import { useGetVehiclesList } from "@/app/hook/useGetVehicleList";
import CardVehicle from "../cardVehicle/CardVehicle";
import styles from "./card-list.module.css";
import { getListVehicles } from "./getListVehicles";

async function CardList() {
  const vehiclesList = await getListVehicles();
  console.log(vehiclesList)
  return (
    <div className={styles.containerMainCardList}>
      <div className={styles.gridListCard}>
        {
          vehiclesList?.map(({id, imageCard, titleCard, descr1, descr2, descr3, descr4}: IDataCard) => (
            <div key={id}>
              <CardVehicle 
                id={id}
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
