import './Caninos.css'


export default function Caninos({ canino }) {
  return (
    <div className="card">
      <h2 id='h2'>{canino.nombre}</h2>
      <p>Edad: {canino.edad}</p>
      <p>Sexo: {canino.sexo}</p>
      <p>Raza: {canino.raza}</p>
      <p>Tamaño: {canino.tamaño}</p>
    </div>
  );
}
export { Caninos };
