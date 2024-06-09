"use client";
import { Button, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import { checkBoxStyle, textFieldStyles } from "./InputsStyles";
import Image from "next/image";
import Link from "next/link";
import styles from "./card-register.module.css";
// imports de firebase
import { aplicationFirebase, db } from "../../../credentials";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
const auth = getAuth(aplicationFirebase);

interface IInputs {
  nameUserRegister: string;
  lastnameUserRegister: string;
  emailUserRegister: string;
  passwordUserRegister: string;
}

function CardRegister() {
  // const [errorLogin, setErrorLogin] = useState<string>("");
  const { register, handleSubmit, formState: { errors } } = useForm<IInputs>();
  const router = useRouter()

  const onSubmit: SubmitHandler<IInputs> = async ({ nameUserRegister, lastnameUserRegister, emailUserRegister, passwordUserRegister, }) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        emailUserRegister,
        passwordUserRegister
      );
      const user = userCredential.user;
      //Selecciona la coleccion users y le añade el objeto (nuevo usuario)
      await setDoc(doc(db, "users", user.uid), {
        nameUserRegister,
        lastnameUserRegister,
        emailUserRegister,
        passwordUserRegister,
        isAdmin: false,
      });
      router.push("/")
      console.log("El usuario fue registrado");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className={styles.containerCardRegister}>
      <div className={styles.containerRegisterInputs}>
        <p className={styles.textWelcome}>BIENVENIDO</p>
        <Image
          className={styles.logoAuta}
          src="https://www.auta.com.ar/static/media/logo-auta.1ad353ae5985c99b7417.png"
          alt="logo-auta"
          width={200}
          height={200}
        />
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formRegister}>
          <div className={styles.completeName}>
            <TextField
              id="nameUserRegister"
              label="Nombre"
              variant="outlined"
              fullWidth
              error={!!errors.nameUserRegister}
              helperText={errors.nameUserRegister?.message}
              {...register("nameUserRegister", {
                minLength: {
                  value: 3,
                  message: "El nombre debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 25,
                  message: "El nombre debe tener como maximo 25 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]+$/,
                  message: "El nombre solo puede contener letras y espacios",
                },
                required: "El nombre es obligatorio",
              })}
              sx={textFieldStyles}
            />
            <TextField
              id="lastnameUserRegister"
              label="Apellido"
              variant="outlined"
              fullWidth
              error={!!errors.lastnameUserRegister}
              helperText={errors.lastnameUserRegister?.message}
              {...register("lastnameUserRegister", {
                minLength: {
                  value: 3,
                  message: "El apellido debe tener al menos 3 caracteres",
                },
                maxLength: {
                  value: 25,
                  message: "El apellido debe tener como maximo 25 caracteres",
                },
                pattern: {
                  value: /^[a-zA-ZÀ-ÿ\s]+$/,
                  message: "El apellido solo puede contener letras y espacios",
                },
                required: "El apellido es obligatorio",
              })}
              sx={textFieldStyles}
            />
            <TextField
              id="emailUserRegister"
              label="Correo electronico"
              variant="outlined"
              fullWidth
              error={!!errors.emailUserRegister}
              helperText={errors.emailUserRegister?.message}
              {...register("emailUserRegister", {
                required: "El correo electronico es obligatorio",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "El formato de correo electronico no es valido",
                },
                maxLength: {
                  value: 50,
                  message:
                    "El correo electrónico no puede tener más de 50 caracteres",
                },
              })}
              sx={textFieldStyles}
            />
            <TextField
              id="passwordUserRegister"
              label="Contraseña"
              variant="outlined"
              type="password"
              fullWidth
              error={!!errors.passwordUserRegister}
              helperText={errors.passwordUserRegister?.message}
              {...register("passwordUserRegister", {
                required: "La contraseña es obligatoria",
                minLength: {
                  value: 8,
                  message: "La contraseña debe tener al menos 8 caracteres",
                },
                maxLength: {
                  value: 20,
                  message: "La contraseña debe tener como maximo 20 caracteres",
                },
                pattern: {
                  value:
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    "La contraseña debe contener al menos una letra mayúscula, una letra minúscula y un número",
                },
              })}
              sx={textFieldStyles}
            />
          </div>
          <FormControlLabel
            required
            control={<Checkbox sx={{ color: "#fff" }} />}
            label="Aceptar terminos y servicios"
            sx={checkBoxStyle}
          />
          <div className={styles.buttonRegister}>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{ color: "#864BFA", fontWeight: "bold" }}
            >
              Registrarse
            </Button>
          </div>
        </form>
        <div>
          <p className={styles.textLogin}>
            ¿Ya eres miembro?{" "}
            <Link href="/login" className={styles.redirectLogin}>
              Iniciar sesión
            </Link>
          </p>
        </div>
      </div>
      <div className={styles.containerRegisterText}></div>
    </div>
  );
}

export default CardRegister;
