"use client";
import React from "react";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "./form-add-car-to-catalogue.module.css";
import { collection, addDoc } from "firebase/firestore";
import { db, uploadImageCardCars } from "@/app/credentials";
import { selectMui, textFieldStyles } from "./InputsStyles";
import { IDataCard } from "@/app/interfaces/IDataCard";
import Swal from "sweetalert2";

function FormAddCarToCatalogue() {
  const typesCars = ["SUV", "Auto", "Furgoneta", "Furgoneta pequeña"];
  const { register, handleSubmit, reset, formState: { errors } } = useForm<IDataCard>();
  //Añade un documento (auto) a la coleccion "carsCatalogue"
  const addVehicleToCard = async (dataObjectCard: IDataCard) => {
    const vehicleCardCarWithFavorite = {
      ...dataObjectCard,
      isFavorte: false
    }
    await addDoc(collection(db, "carsCatalogue"), vehicleCardCarWithFavorite);
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
      Swal.fire({
        title: "¡Exito!",
        text: "Vehículo agregado con éxito",
        icon: "success",
        confirmButtonText: "OK",
      });
      reset();
    } catch (error) {
      console.error(error);
      Swal.fire({
        title: "¡Error!",
        text: "Ocurrió un problema al añadir un vehículo",
        icon: "error",
        confirmButtonText: "OK",
      });
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
                value: 50,
                message: "La descripcion no puede tener mas de 50 caracteres",
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
                value: 50,
                message: "La descripcion no puede tener mas de 50 caracteres",
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
                value: 50,
                message: "La descripcion no puede tener mas de 50 caracteres",
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
                value: 50,
                message: "La descripcion no puede tener mas de 50 caracteres",
              },
            })}
          />
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            fullWidth
            sx={selectMui}
            error={!!errors.selectTypeCard}
            {...register("selectTypeCard", {
              required: "El tipo del vehículo es obligatorio",
            })}
          >
            {typesCars.map((typeCar) => (
              <MenuItem value={typeCar} key={typeCar}>
                {typeCar}
              </MenuItem>
            ))}
            <FormHelperText>{!!errors.selectTypeCard}</FormHelperText>
          </Select>
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
