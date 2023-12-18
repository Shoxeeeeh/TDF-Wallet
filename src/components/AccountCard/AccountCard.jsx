// AccountCard.jsx
import React from 'react';

const AccountCard = ({ money }) => (
  <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
    <h2>Información de la cuenta</h2>
    <p>Dinero disponible: ${money}</p>
    <button onClick={() => console.log('Transferir dinero')}>Transferir Dinero</button>
    <button onClick={() => console.log('Crear plazo fijo')}>Crear Plazo Fijo</button>
  </div>
);

export default AccountCard;
