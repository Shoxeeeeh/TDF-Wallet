import { Children, useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { AuthContext, AuthProvider } from './Auth/AuthContext'
import Login from './components/Login/Login'
import Layout from './components/layout/layout'


function App() {

  const {isLogged} = useContext(AuthContext);

  console.log(isLogged);
  

  return (
    <>
      <AuthProvider><Layout/></AuthProvider>
    </>
  )
}

export default App
