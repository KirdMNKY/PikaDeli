import React, { useReducer } from 'react'
import logo from './logo.svg'
import './App.css'
import PikaContext from './context/PikaContext'
import PikaReducer from './Reducers/PikaReducer'
import Header from './Components/Common/Header'

const App = () => {
  const [state, dispatch] = useReducer(PikaReducer)

  return (
    <PikaContext.Provider value={{ state, dispatch }}>
      <Header />
    </PikaContext.Provider>
  );
}

export default App
