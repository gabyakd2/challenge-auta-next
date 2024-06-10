"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, TextField } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { textFieldStylesEmail, textFieldStylesPassword } from "./InputsStyles";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./card-login.module.css";
// Importacion de firebase
import { aplicationFirebase } from "@/app/credentials";
import {
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import { signInWithGoogle } from "../services/signInWithGoogle";

const auth = getAuth(aplicationFirebase);

interface IInputs {
  email: string;
  password: string;
}

function CardLogin() {
  const [errorLogin, setErrorLogin] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IInputs>();
  const router = useRouter();

  const onSubmit: SubmitHandler<IInputs> = async ({ email, password }) => {
    //Hace autenticacion si el email y contraseña coinciden
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/");
    } catch (error) {
      setErrorLogin("El usuario o contraseña no coinciden");
    }
  };

  //handler para iniciar sesion con google
  const handleSignInWithGoogle = async () => {
    await signInWithGoogle(router, setErrorLogin);
  };

  return (
    <div className={styles.containerCardLogin}>
      <div className={styles.containerLoginText}></div>
      <div className={styles.containerLoginInputs}>
        <div className={styles.containerSecondLoginInputs}>
          <Image
            className={styles.logoAuta}
            src="https://www.auta.com.ar/static/media/logo-auta.1ad353ae5985c99b7417.png"
            alt="logo-auta"
            width={200}
            height={200}
          />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.inputsLogin}>
              <TextField
                id="email"
                label="Correo electronico"
                variant="outlined"
                fullWidth
                error={!!errors.email || !!errorLogin}
                helperText={errors.email?.message}
                {...register("email", {
                  required: "El correo es obligatorio",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "El formato del correo electrónico no es válido",
                  },
                })}
                sx={textFieldStylesEmail}
              />
            </div>
            <div className={styles.inputsLogin}>
              <TextField
                id="password"
                label="Contraseña"
                variant="outlined"
                type="password"
                error={!!errors.password || !!errorLogin}
                helperText={errors.password?.message}
                fullWidth
                {...register("password", {
                  required: "La contraseña es obligatoria",
                })}
                sx={textFieldStylesPassword}
              />
            </div>
            <div className={styles.buttonSignIn}>
              <Button
                variant="contained"
                type="submit"
                fullWidth
                sx={{ color: "#864BFA", fontWeight: "bold" }}
              >
                Ingresar
              </Button>
            </div>
            <p className={styles.textOptionO}>O</p>
            <div className={styles.buttonSignInGoogle}>
              <Button
                variant="contained"
                fullWidth
                sx={{ color: "#864BFA", fontWeight: "bold" }}
                onClick={handleSignInWithGoogle}
              >
                <GoogleIcon />
              </Button>
            </div>
            {errorLogin && <p className={styles.errorLogin}>{errorLogin}</p>}
          </form>
          <div className={styles.buttonSignIn}>
            <p className={styles.textRegister}>
              ¿No eres miembro?{" "}
              <Link href="/register" className={styles.redirectRegister}>
                Crea una nueva cuenta
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardLogin;
