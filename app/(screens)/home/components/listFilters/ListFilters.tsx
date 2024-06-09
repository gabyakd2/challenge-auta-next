import React, { Dispatch, SetStateAction } from "react";
import { Stack, Button } from "@mui/material";
import styles from "./list-filters.module.css";

interface IProps {
  setFilters: Dispatch<SetStateAction<{ selectTypeCard: string;}>>;
}

function ListFilters({setFilters}: IProps) {

  const handleChangeTypeCar = (typeCar: string) => {
    setFilters((prevState) => ({
      ...prevState,
      selectTypeCard: typeCar.toLocaleLowerCase()
    }))
  }
  return (
    <div className={styles.containerStackFilters}>
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => handleChangeTypeCar("todos")}>Todos</Button>
        <Button variant="contained" onClick={() => handleChangeTypeCar("auto")}>Autos</Button>
        <Button variant="contained" onClick={() => handleChangeTypeCar("suv")}>SUVs</Button>
        <Button variant="contained" onClick={() => handleChangeTypeCar("furgoneta")}>Furgoneta</Button>
        <Button variant="contained" onClick={() => handleChangeTypeCar("furgoneta pequeña")}>Furgoneta pequeña</Button>
      </Stack>
    </div>
  );
}

export default ListFilters;
