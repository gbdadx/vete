import './Caninos.css'

const Caninos = [{  
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
    }
  
  ];
export default function CaninosInfo({ canino }) {
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
