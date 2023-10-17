import React, { useState } from 'react';
import CaninosInfo, { Caninos } from '../caninos/CaninosInfo';
import './Veterinaria.css';

export default function Veterinaria() {
  const [state, setState] = useState(Caninos);

  return (
    <div className="veterinaria">
      <h1 id='h1'>Clientes caninos de Veterinaria</h1>
      <ul className='ul'>
        {state.map(canino => (
          <CaninosInfo key={canino.id} canino={canino} />
        ))}
      </ul>
    </div>
  );
}
