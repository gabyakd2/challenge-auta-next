import React from "react";
import styles from "./header-home.module.css"

function HeaderHome() {
  return (
    <div className={styles.containerHome}>
      <h1 className={styles.titileHeaderHomer}>OFERTAS DEL <br/> MOMENTO</h1>
    </div>
  )
}

export default HeaderHome