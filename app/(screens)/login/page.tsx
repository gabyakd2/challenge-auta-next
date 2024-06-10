import React from "react";
import CardLogin from "./components/CardLogin";
import styles from "./login-main.module.css";

function LoginPage() {
  return (
    <div className={styles.containerLogin}>
      <h2 className={styles.titleLogin}>
        Inicia sesión en Auta y encontrá lo que estas buscando
      </h2>
      <CardLogin />
    </div>
  );
}

export default LoginPage;
