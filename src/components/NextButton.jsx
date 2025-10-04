import React from 'react'

export default function NextButton({dispatch, answer}) {
    if(answer === null) return null;
  return (
    <div className='flex flex-col justify-end items-end mt-5 w-[75%]'>
    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={()=>dispatch({type:'nextQuestion'})}>Next</button>
    </div>
  )
}
