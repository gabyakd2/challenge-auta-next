"use client";

import { useState } from "react";
import HeaderHome from "../components/headerHome/HeaderHome";
import ListFilters from "../components/listFilters/ListFilters";
import CardList from "../components/cardList/CardList";
import ContactForm from "../components/contactForm/ContactForm";
import styles from "./home-main.module.css";
// import { useGetVehiclesList } from "@/app/hook/useGetVehicleList";

function HomeMain() {
  const [filters, setFilters] = useState({
    selectTypeCard: "todos",
  });

  return (
    <div>
      <HeaderHome />
      <ListFilters setFilters={setFilters} />
      <CardList filters={filters} />
      <div className={styles.containerFormMain}>
        <p className={styles.textTitleForm}>Consultar a un asesor</p>
        <ContactForm />
      </div>
    </div>
  );
}

export default HomeMain;
