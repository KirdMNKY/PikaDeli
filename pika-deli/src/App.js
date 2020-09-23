import React, { useReducer } from 'react'
import './App.css'
import Main from './Components/Common/Main'
import PikaContext from './context/PikaContext'
import PikaReducer from './Reducers/PikaReducer'

const App = () => {
  const [state, dispatch] = useReducer(PikaReducer)

  return (
    <PikaContext.Provider value={{ state, dispatch }}>
      <Main />
  </PikaContext.Provider>
  );
}

export default App
