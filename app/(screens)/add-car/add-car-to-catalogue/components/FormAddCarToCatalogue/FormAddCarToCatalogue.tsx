"use client";

import React from "react";
import { TextField, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./form-add-car-to-catalogue.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db, uploadImageCardCars } from "@/app/credentials";
import { textFieldStyles } from "./InputsStyles";

export interface IDataCard {
  descr1: string;
  descr2: string;
  descr3: string;
  descr4: string;
  imageCard: string | undefined;
  titleCard: string;
}

function FormAddCarToCatalogue() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IDataCard>();
  //Añade un documento auto a la coleccion "carsCatalogue"
  const addVehicleToCard = async (dataObjectCard: IDataCard) => {
    await addDoc(collection(db, "carsCatalogue"), dataObjectCard);
  };

  const onSubmit: SubmitHandler<IDataCard> = async (data) => {
    try {
      //uploadImageCardCars sube la imagen al storage y devuelve la url de la imagen
      const imgUrl = await uploadImageCardCars(data.imageCard?.[0]);
      const dataVehicleCard = {
        ...data,
        imageCard: imgUrl,
      };
      await addVehicleToCard(dataVehicleCard);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.containerFormPrincipal}>
      <div className={styles.containerInputs}>
        <p className={styles.titleForm}>Agregue un auto al catálogo</p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className={styles.formContainer}
        >
          {/* titulo del auto */}
          <TextField
            id="outlined-basic"
            label="Titulo"
            variant="outlined"
            className={styles.inputForm}
            size="small"
            sx={textFieldStyles}
            error={!!errors.titleCard}
            helperText={errors.titleCard?.message}
            {...register("titleCard", {
              required: "El titulo es obligatorio",
              pattern: {
                value: /^[a-zA-Z0-9 ]+$/,
                message: "El titulo solo puede contener letras y numeros",
              },
              minLength: {
                value: 3,
                message: "El titulo debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 20,
                message: "El titulo no puede tener mas de 20 caracteres",
              },
            })}
          />
          {/* imagen card */}
          <TextField
            id="outlined-basic"
            variant="outlined"
            className={styles.inputForm}
            size="small"
            sx={textFieldStyles}
            type="file"
            error={!!errors.imageCard}
            helperText={errors.imageCard?.message}
            {...register("imageCard", {
              required: "La imagen es obligatoria",
            })}
          />
          {/* descripcion del auto en card */}
          <TextField
            id="outlined-basic"
            label="Descripcion 1"
            variant="outlined"
            className={styles.inputForm}
            size="small"
            sx={textFieldStyles}
            error={!!errors.descr1}
            helperText={errors.descr1?.message}
            {...register("descr1", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 3,
                message: "La descripcion debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 30,
                message: "La descripcion no puede tener mas de 30 caracteres",
              },
            })}
          />
          <TextField
            id="outlined-basic"
            label="Descripcion 2"
            variant="outlined"
            className={styles.inputForm}
            size="small"
            sx={textFieldStyles}
            error={!!errors.descr2}
            helperText={errors.descr2?.message}
            {...register("descr2", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 3,
                message: "La descripcion debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 30,
                message: "La descripcion no puede tener mas de 30 caracteres",
              },
            })}
          />
          <TextField
            id="outlined-basic"
            label="Descripcion 3"
            variant="outlined"
            className={styles.inputForm}
            size="small"
            sx={textFieldStyles}
            error={!!errors.descr3}
            helperText={errors.descr3?.message}
            {...register("descr3", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 3,
                message: "La descripcion debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 30,
                message: "La descripcion no puede tener mas de 30 caracteres",
              },
            })}
          />
          <TextField
            id="outlined-basic"
            label="Descripcion 4"
            variant="outlined"
            className={styles.inputForm}
            size="small"
            sx={textFieldStyles}
            error={!!errors.descr4}
            helperText={errors.descr4?.message}
            {...register("descr4", {
              required: "La descripcion es obligatoria",
              minLength: {
                value: 3,
                message: "La descripcion debe tener al menos 3 caracteres",
              },
              maxLength: {
                value: 30,
                message: "La descripcion no puede tener mas de 30 caracteres",
              },
            })}
          />
          <div className={styles.buttonCreateCar}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ color: "#864BFA", fontWeight: "bold" }}
            >
              Crear nueva tarjeta
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormAddCarToCatalogue;
