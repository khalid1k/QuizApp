import React, { useEffect, useReducer, useState } from "react"
import Header from "./components/header"
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from './components/Error';
import StartScreen from "./StartScreen";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready' , 'active', 'finshed'
  status: 'loading'
}

function reducer(state, action) {
  switch(action.type) {
    case'dataReceived':
    return {...state, questions: action.payload, status: 'ready'};
    case 'dataFailed': 
    return {...state, status: 'error'};
    default: throw new Error("Action unknown")
  }
}

function App() {
  const [{questions, status}, dispatch] = useReducer(reducer, initialState); 

  useEffect(()=> {
    const res = fetch('http://localhost:8000/questions').then((res)=> res.json()).then((data)=> dispatch({
      type: 'dataReceived', payload: data
    })).catch((error)=> dispatch({type: 'dataFailed'}))
  }, [])

  return (
    <div className="app">
      <Header/>
      <Main>
        {status === "loading" && <Loader/>}
        {status === "error" && <Error/>}
        {status === 'ready' && <StartScreen/>}
      </Main>
    </div>
  )
}

export default App
