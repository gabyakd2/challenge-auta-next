import React from "react";
import { CardContent, CardMedia, Button, Grid, Card } from "@mui/material";
import styles from "./card-vehicle.module.css";
import { IDataCard } from "@/app/interfaces/IDataCard";

function CardVehicle({imageCard, titleCard, descr1, descr2, descr3, descr4}: IDataCard) {
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
          {/* <div className={styles.datesVehicle}>
          </div> */}
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
        </div>
      </Card>
    </Grid>
  );
}

export default CardVehicle;
