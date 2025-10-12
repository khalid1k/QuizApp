import React, { useEffect, useReducer, useState } from "react";
import Header from "./components/header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./StartScreen";
import Questions from "./components/Questions";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import Finshed from "./components/Finshed";
import Timer from "./components/Timer";

const initialState = {
  questions: [],

  // 'loading', 'error', 'ready' , 'active', 'finshed'
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return { ...state, status: "active" };
    case "newAnswer":
      const question = state.questions.at(state.index);
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };
    case 'nextQuestion':
       return {
        ...state, index: state.index + 1, answer: null
       }
    case 'finish':
      return {
        ...state, status: 'finished', highScore: state.points > state.highScore ? state.points : state.highScore,
      };
    case 'restart':
      return {
        ...initialState, questions: state.questions, status: 'ready',
      }
    default:
      throw new Error("Action unknown");
  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const numQuestions = questions.length;
  const maxPossiblePoints = questions.reduce((prev, curr)=> prev + curr.points, 0);

  useEffect(() => {
    const res = fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "dataReceived",
          payload: data,
        })
      )
      .catch((error) => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
          <Progress index={index} numQuestions={numQuestions} points={points} maxPossiblePoints={maxPossiblePoints}/>
          <Questions
            question={questions[index]}
            answer={answer}
            dispatch={dispatch}
          />
          <div className="flex justify-between items-center">
            <Timer/>
          <NextButton dispatch={dispatch} answer={answer} index={index} numQuestions={numQuestions}/> 
          </div>
          </>
        )}
        {status === 'finished' && <Finshed points={points} maxPossiblePoints={maxPossiblePoints} dispatch={dispatch} highScore={highScore}/>}
      </Main>
    </div>
  );
}

export default App;
