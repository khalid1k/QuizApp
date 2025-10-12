import React, { useEffect } from 'react'
// timer component

export default function Timer() {
    useEffect(function() {
        setInterval(function() {
            
        }, 1000);
    }, [])
  return (
    <div className='bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl'>05:00</div> 
  )
}
 