import React from "react";
import styles from "./register-main.module.css";
import CardRegister from "./components/CardRegister";

function RegisterPage() {
  return (
    <div className={styles.containerMainLogin}>
      <CardRegister />
    </div>
  )
}

export default RegisterPage