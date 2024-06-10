import React from "react";
import styles from "./register-main.module.css";
import CardRegister from "./components/CardRegister";

function RegisterPage() {
  return (
    <div className={styles.containerRegister}>
      <h2 className={styles.titleRegister}>
        Registrate y viví la experiencia
      </h2>
      <CardRegister />
    </div>
  )
}

export default RegisterPage