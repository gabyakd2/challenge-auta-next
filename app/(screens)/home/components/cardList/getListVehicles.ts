//OBTENER LISTA SERVER SIDE
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/credentials";
import { IDataCard } from "@/app/interfaces/IDataCard";

export const getListVehicles = async () => {
  try {
    const refVehiclesCollection = collection(db, "carsCatalogue");
    const vehiclesDocs = await getDocs(refVehiclesCollection);
    const vehiclesList = vehiclesDocs.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as IDataCard[];
    return vehiclesList;
  } catch (err) {
    console.error(err)
  }
}