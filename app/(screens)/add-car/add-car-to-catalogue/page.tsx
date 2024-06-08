import React from "react";
import FormAddCarToCatalogue from "./components/FormAddCarToCatalogue/FormAddCarToCatalogue";
import styles from "./card-catalogue.module.css"

function AddCardToCatalogueMain() {
  return (
    <div className={styles.containerMainCardCatalogue}>
      <FormAddCarToCatalogue />
    </div>
  )
}

export default AddCardToCatalogueMain