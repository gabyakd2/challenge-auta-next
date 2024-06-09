//OBTENER LISTA DE VEHICULOS (CLIENT SIDE)
import { useState, useEffect } from "react";
import { IDataCard } from "@/app/interfaces/IDataCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../credentials";

export function useGetVehiclesList () {
  const [listVehicles, setListVehicles] = useState<IDataCard[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getVehicles = async () => {
      try {
        const refVehiclesCollection = collection(db, "carsCatalogue");
        const vehiclesDocs = await getDocs(refVehiclesCollection);
        const vehiclesList = vehiclesDocs.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as IDataCard[];
        setListVehicles(vehiclesList);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch vehicles");
        setLoading(false);
      }
    };

    getVehicles();
  }, []);

  return { listVehicles, loading, error };
}

