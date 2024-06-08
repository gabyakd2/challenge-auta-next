import React from "react";
import { CardContent, CardMedia, Button, Grid, Card } from "@mui/material";
import styles from "./card-vehicle.module.css";

function CardVehicle() {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 400, height: "100%" }}>
        <CardContent>
          <CardMedia
            component="img"
            image="https://www.peugeot.com.ar/content/dam/peugeot/argentina/b2c/our-range/208-roadtrip/RoadtripBaseballcard.png?imwidth=1920"
            alt="nombre auto"
            style={{ height: "20%", marginBottom: "30px" }}
          />
          <p className={styles.titleCar}>PEUGEOT 208</p>
          {/* <div className={styles.datesVehicle}>
          </div> */}
          <div className={styles.descriptionCard}>
            <p>Nuevo i-Cockpit 3D®</p>
            <p>Caja Automática secuencial</p>
            <p>Tecnología ADAS</p>
            <p>Alerón trasero negro brillante</p>
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
