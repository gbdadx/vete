import  { useState } from "react";
import Caninos from "../caninos/Caninos";
import styles from "./Veterinaria.module.css";
const Canino = [
  {
    id: 1,
    nombre: "Firulais",
    edad: 3 + " Años Humanos",
    sexo: "Macho",
    raza: "pastor aleman",
    tamaño: "grande",
  },

  {
    id: 2,
    nombre: "Maya",
    edad: 4 + " Años Humanos",
    sexo: "Hembra",
    raza: "pug",
    tamaño: "chico",
  },

  {
    id: 3,

    nombre: "Pipo",

    edad: 5 + " Años Humanos",

    sexo: "Macho",

    raza: "pastor",

    tamaño: "mediano",
  },

  {
    id: 4,
    nombre: "pacha",
    edad: 4 + " Años Humanos",
    sexo: "Hembra",
    raza: "pastor",
    tamaño: "chico",
  },

  {
    id: 5,
    nombre: "Tara",
    edad: 8 + " Años Humanos",
    sexo: "Hembra",
    raza: "Pitbull",
    tamaño: "grande",
  },
];

const Veterinaria = () => {
  const [state] = useState(Canino);

  return (
    <div className={styles.veterinaria}>
      <h1 className={styles.h1}>Clientes caninos de Veterinaria</h1>
      <ul className={styles.ul}>
        {state.map((canino) => (
          <Caninos key={canino.id} canino={canino} />
        ))}
      </ul>
    </div>
  );
};
export default Veterinaria;
