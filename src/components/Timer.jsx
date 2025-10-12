import React, { useEffect } from 'react'
// timer component

export default function Timer({dispatch, secondsRemaining}) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
    useEffect(function() {
      const id = setInterval(function() {
            dispatch({type: 'tick'})
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch])
  return (
    <div className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl'>{mins < 10 && '0'}{mins}:{seconds < 10 && '0'}{seconds}</div> 
  )
}
 