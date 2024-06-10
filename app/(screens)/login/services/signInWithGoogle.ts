/* eslint-disable @typescript-eslint/no-explicit-any */
//ESTA FUNCION HACE LA LOGICA PARA INICIAR SESION CON GOOGLE
import { aplicationFirebase, providerGoogle } from "@/app/credentials";
import { getAuth, signInWithPopup } from "firebase/auth";
const auth = getAuth(aplicationFirebase);

export const signInWithGoogle = async (router: any, setErrorLogin: any) => {
  try {
    const infoAccountGoogle = await signInWithPopup(auth, providerGoogle);
    if (infoAccountGoogle.user) {
      router.push("/");
    }
  } catch (error) {
    console.error(error);
    setErrorLogin("El usuario o contraseña no coinciden");
  }
};
