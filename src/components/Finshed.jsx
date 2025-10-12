import React from 'react'

export default function Finshed({points, maxPossiblePoints, highScore}) {
    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
    <p className='p-2 bg-sky-300 text-white text-xl rounded-2xl mt-3 w-80'>
       <span>{emoji}</span> Your Scored <strong>{points}</strong> out of {maxPossiblePoints}  ({Math.ceil(percentage)})
    </p>
    <p className='text-lg mt-1'>HighScore: {highScore} points</p>


    <button  className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-2xl" onClick={()=>dispatch({type:'restart'})}>Restart quiz</button>

    </>

  )
}
