import React from "react";
import CardVehicle from "../cardVehicle/CardVehicle";
import styles from "./card-list.module.css";

function CardList() {
  return (
    <div className={styles.containerMainCardList}>
      <div className={styles.gridListCard}>
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
        <CardVehicle />
      </div>
    </div>
  );
}

export default CardList;
