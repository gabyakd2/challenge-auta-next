// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID
};

// Initialize Firebase
export const aplicationFirebase = initializeApp(firebaseConfig);
export const db = getFirestore(aplicationFirebase);
export const storage = getStorage(aplicationFirebase);


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function uploadImageCardCars(imgCar: any) { //TODO TIPAR IMGCAR
  if(!imgCar){
    console.error("No se cargo ninguna imagen")
  }
  try {
    //* Sube la imagen al storage
    const storageRef = ref(storage, `imagesCardCars/${imgCar.name}`)
    await uploadBytes(storageRef, imgCar)
    console.log("La imagen se cargo con éxito")

    //* Obtener el link de descarga de la imagen
    const downloadUrl = await getDownloadURL(storageRef);
    return downloadUrl
  } catch (error) {
    console.error("Error al cargar la imagen:", error)
  }
}