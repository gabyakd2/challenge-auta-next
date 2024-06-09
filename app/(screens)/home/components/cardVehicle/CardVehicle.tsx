"use client";
import React, { useState } from "react";
import { CardContent, CardMedia, Button, Grid, Card } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import EditIcon from "@mui/icons-material/Edit";
import styles from "./card-vehicle.module.css";
import { IDataCard } from "@/app/interfaces/IDataCard";
import { useAuth } from "@/app/hook/useAuth";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "@/app/credentials";

interface IProps {
  addCarToFavorite: (car: IDataCard) => void;
  removeCarFromFavorite: (id: string) => void;
}

interface CombinedProps extends IDataCard, IProps {}

function CardVehicle({ id, imageCard, titleCard, descr1, descr2, descr3, descr4, isFavorite, addCarToFavorite, removeCarFromFavorite }: CombinedProps) {
  const [favorite, setFavorite] = useState(isFavorite);
  const { userSesion } = useAuth();

  const deleteCardOfCatalogue = async (idCard: string) => {
    await deleteDoc(doc(db, "carsCatalogue", idCard));
    window.location.reload();
  };

  //Actualiza en la db la propiedad isFavorite al estado contrario
  const changeFavorite = async () => {
    if (!id) return console.error("No se encontro el id del carro");
    try {
      const cardRef = doc(db, "carsCatalogue", id);
      const newFavoriteState = !favorite;
      await updateDoc(cardRef, { isFavorite: !favorite });
      setFavorite(!favorite);
      //Si el auto no esta marcado o si se desmarca como favorito, se elimina de la lista de favoritos
      if(!newFavoriteState) {
        removeCarFromFavorite(id)
      }
      //Si el auto esta marcado o si se marca como favorito, se agrega a la lista de favoritos
      if(newFavoriteState){
        addCarToFavorite({ id, imageCard, titleCard, descr1, descr2, descr3, descr4, isFavorite: !favorite });
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card sx={{ maxWidth: 400, height: "100%" }}>
        {/* <button onClick={() => addCarToFavorite(objectCar)}>pseudofavorito</button> */}
        <CardContent>
          {
            userSesion?.isAdmin === false && (
              favorite ? (
                <Button variant="contained" onClick={changeFavorite}>
                  <FavoriteIcon color="error" />
                </Button>
              ) : (
                <Button variant="contained" onClick={changeFavorite}>
                  <FavoriteBorderIcon />
                </Button>
              )
            )
          }
          {/* {favorite ? (
            <Button variant="contained" onClick={changeFavorite}>
              <FavoriteIcon />
            </Button>
          ) : (
            <Button variant="contained" onClick={changeFavorite}>
              <FavoriteBorderIcon />
            </Button>
          )} */}
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
              <Button
                variant="outlined"
                onClick={() => {
                  if (id) deleteCardOfCatalogue(id);
                }}
              >
                <DeleteIcon color="error" />
              </Button>
              {/* <Button variant="outlined">
                  <EditIcon color="warning" />
                </Button> */}
            </div>
          ) : null}
        </div>
      </Card>
    </Grid>
  );
}

export default CardVehicle;
