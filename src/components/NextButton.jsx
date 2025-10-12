import React from 'react'

export default function NextButton({dispatch, answer, numQuestions, index}) {
    if(answer === null) return null;
    if(index < numQuestions - 1){
  return (
    <div className='flex flex-col justify-end items-end mt-5 w-[75%]'>
    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={()=>dispatch({type:'nextQuestion'})}>Next</button>
    </div>
  )
}
if(index === numQuestions - 1){
  return (
    <div className='flex flex-col justify-end items-end w-[75%]'>
    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={()=>dispatch({type:'finish'})}>Finish</button>
    </div>
  )
}
}
