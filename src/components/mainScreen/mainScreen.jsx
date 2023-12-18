// MainScreen.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserCard from '../UserCard/UserCard';
import AccountCard from '../AccountCard/AccountCard';

const MainScreen = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('https://localhost:7203/api/Accounts/GetAccountId/2');
        setUserData(response.data.data);
      } catch (error) {
        console.error('Error al obtener datos del usuario:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <h1>Main Content</h1>
        
      </div>
      <div style={{ width: '300px', marginLeft: '20px' }}>
        {userData ? (
          <>
            <UserCard userId={userData.userId} />
            <AccountCard money={userData.money} />
          </>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
