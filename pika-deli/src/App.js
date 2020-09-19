import React, { useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import PikaContext from './context/PikaContext'
import PikaReducer from './Reducers/PikaReducer'
import Navbar from './Components/Common/Navbar'

const App = () => {
  const [state, dispatch] = useReducer(PikaReducer)

  return (
    <PikaContext.Provider value={{ state, dispatch }}>
      <Navbar />
    </PikaContext.Provider>
  );
}

export default App
