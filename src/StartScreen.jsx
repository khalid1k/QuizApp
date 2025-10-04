import React from 'react'

export default function StartScreen({numQuestions, dispatch}) {
  return (
    <div className='flex flex-col justify-center mt-4 items-center gap-2'>
        <h2 className='text-xl font-semibold'>Welcome to The React Quiz!</h2>
        <h3 className='text-xl font-semibold'>{numQuestions} Questions to test your React mastery</h3>
        <button  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={()=>dispatch({type:'start'})}>Let's Start</button>
    </div>
  )
}
