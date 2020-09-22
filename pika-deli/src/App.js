import React, { useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import PikaContext from './context/PikaContext'
import PikaReducer from './Reducers/PikaReducer'
import Navbar from './Components/Common/Navbar'

import Home from './Components/Pages/Home'

export default function App() {
  const [state, dispatch] = useReducer(PikaReducer)

  return (
    <PikaContext.Provider value={{ state, dispatch }}>
      <Navbar />
      <Home />
    </PikaContext.Provider>
  );
}

