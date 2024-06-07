import React from "react";
import CardLogin from "./components/CardLogin";
import styles from "./login-main.module.css"

function LoginPage() {
  return (
    <div className={styles.containerMainLogin}>
      <CardLogin />
    </div>
  )
}

export default LoginPage