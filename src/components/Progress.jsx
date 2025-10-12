import React from 'react'

export default function Progress({index, numQuestions, points, maxPossiblePoints}) {
  return (
    <header className='mt-3'>
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-medium text-gray-700">{points}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
            <div
              className="bg-blue-600 h-full rounded-full transition-all duration-300 ease-out"
              style={{ width: `${points}%` }}
            />
          </div>
        </div>
    <p>Questions <strong>{index + 1}</strong>/{numQuestions}</p>
    <p><strong>{points}</strong> / {maxPossiblePoints}</p>
    </header>
  )
}
