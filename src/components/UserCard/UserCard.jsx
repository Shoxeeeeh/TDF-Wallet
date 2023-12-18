// UserCard.jsx
import React from 'react';

const UserCard = ({ userId }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2>Bienvenido</h2>
    <p>Usuario: {userId}</p>
  </div>
);

export default UserCard;