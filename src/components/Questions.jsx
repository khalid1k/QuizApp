import React from 'react'
import Options from './Options'

export default function Questions({question, answer, dispatch}) {
  return (
    <div className='flex flex-col gap-2 justify-center items-center'>
        <h4 className='text-xl font-semibold mt-3'>{question.question}</h4>
        <Options question={question} answer={answer} dispatch={dispatch}/>
    </div>
  )
}
