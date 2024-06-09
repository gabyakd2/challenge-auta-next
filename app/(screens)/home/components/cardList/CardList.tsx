"use client"
import React, { useEffect, useState } from "react";
import { IDataCard } from "@/app/interfaces/IDataCard";
import CardVehicle from "../cardVehicle/CardVehicle";
import styles from "./card-list.module.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/credentials";

function CardList() {
  const [listVehicles, setListVehicles] = useState<IDataCard[]>();

  useEffect(() => {
    const getVehicles = async () => {
      const refVehiclesCollection = collection(db, "carsCatalogue");
      const vehiclesDocs = await getDocs(refVehiclesCollection);
      const vehiclesList = vehiclesDocs.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as IDataCard[]
      setListVehicles(vehiclesList);
    };
    getVehicles();
  }, []);
  console.log(listVehicles);
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
