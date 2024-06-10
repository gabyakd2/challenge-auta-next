"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, TextField } from "@mui/material";
import Image from "next/image";
import styles from "./card-form.module.css";
import { textFieldStyles } from "./InputsStyles";
import Swal from "sweetalert2";

function ContactForm() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const form = useRef<any>(null);

  const sendEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    emailjs
      .sendForm("service_72e0gbq", "template_84cgwze", form.current, {
        publicKey: "bf7EoOQF0mJdThjgC",
      })
      .then(
        () => {
          Swal.fire({
            title: "¡EXITO!",
            text: "Su mensaje fue envioado con éxito",
            icon: "success",
            confirmButtonText: "OK",
          });
        },
        (error) => {
          Swal.fire({
            title: "¡Error!",
            text: "Ocurrió un problema al enviar su mensaje",
            icon: "error",
            confirmButtonText: "OK",
          });
          console.log("FAILED...", error.text);
        }
      );
  };
  // vehicleadau@hotmail.com emailjs:adminvehicleau

  return (
    <div className={styles.containerCardRegister}>
      <div className={styles.containerRegisterInputs}>
        <Image
          className={styles.logoAuta}
          src="https://www.auta.com.ar/static/media/logo-auta.1ad353ae5985c99b7417.png"
          alt="logo-auta"
          width={100}
          height={100}
        />
        <form ref={form} onSubmit={sendEmail} className={styles.formRegister}>
          <div className={styles.completeName}>
            <TextField
              id="nameUserRegister"
              label="Nombre"
              variant="outlined"
              fullWidth
              name="user_name"
              sx={textFieldStyles}
            />
            <TextField
              id="emailUserRegister"
              label="Correo electronico"
              variant="outlined"
              fullWidth
              name="user_email"
              sx={textFieldStyles}
            />
            <TextField
              id="passwordUserRegister"
              label="Telefono"
              variant="outlined"
              fullWidth
              name="user_phone"
              sx={textFieldStyles}
            />
          </div>
          <div className={styles.containerTextArea}>
            <TextField
              id="outlined-multiline-static"
              label="Consulta"
              multiline
              fullWidth
              name="message"
              sx={textFieldStyles}
            />
          </div>
          <div className={styles.buttonRegister}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ color: "#864BFA", fontWeight: "bold" }}
            >
              ENVIAR CONSULTA
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
