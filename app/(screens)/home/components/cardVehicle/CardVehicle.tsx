"use client"
import React from "react";
import { CardContent, CardMedia, Button, Grid, Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditIcon from "@mui/icons-material/Edit";
import styles from "./card-vehicle.module.css";
import { IDataCard } from "@/app/interfaces/IDataCard";
import { useAuth } from "@/app/hook/useAuth";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/credentials";

function CardVehicle({id, imageCard, titleCard, descr1, descr2, descr3, descr4}: IDataCard) {
  const { userSesion } = useAuth();

  const deleteCardOfCatalogue = async(idCard: string) => {
    await deleteDoc(doc(db, "carsCatalogue", idCard))
    window.location.reload()
  }

  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 400, height: "100%" }}>
        <CardContent>
          <CardMedia
            component="img"
            image={imageCard}
            alt={titleCard}
            style={{ height: "20%", marginBottom: "30px" }}
          />
          <p className={styles.titleCar}>{titleCard}</p>
          <div className={styles.descriptionCard}>
            <p>{descr1}</p>
            <p>{descr2}</p>
            <p>{descr3}</p>
            <p>{descr4}</p>
          </div>
        </CardContent>
        <div className={styles.containerButton}>
          <Button variant="contained" color="secondary">
            Ver ficha tecnica
          </Button>
          {userSesion?.isAdmin ? (
              <div>
                <Button variant="outlined" onClick={() => {if (id) deleteCardOfCatalogue(id)}}>
                  <DeleteIcon color="error" />
                </Button>
                {/* <Button variant="outlined">
                  <EditIcon color="warning" />
                </Button> */}
              </div>
            ): null}
        </div>
      </Card>
    </Grid>
  );
}

export default CardVehicle;
