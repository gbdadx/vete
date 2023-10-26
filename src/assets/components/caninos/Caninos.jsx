import style from "./Caninos.module.css";


export default function Caninos({ canino }) {
  return (
    <div className={style.card}>
      <h2 className={style.h2}>{canino.nombre}</h2>
      <p>Edad: {canino.edad}</p>
      <p>Sexo: {canino.sexo}</p>
      <p>Raza: {canino.raza}</p>
      <p>Tamaño: {canino.tamaño}</p>
    </div>
  );
}

