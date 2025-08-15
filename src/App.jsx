import React, { useRef, useState } from 'react'

function App() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const timeRef = useRef(null)

  const timerController = () => {
    if (isRunning) {
      clearInterval(timeRef.current)
      timeRef.current = null
    } else {
      timeRef.current = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }

    setIsRunning(!isRunning)

  }

  const reset = () => {
    setTime(0)
    clearInterval(timeRef.current)
    timeRef.current = 0;
    setIsRunning(false)
  }

  return (
    <div className='max-w-xl mx-auto bg-white p-4 rounded-lg shadow-lg items-center justify-center'>
      <h1 className="text-2xl font-bold text-center">Timer : <strong>{time}</strong></h1>
     
      <div className="display-flex mx-auto">
         <button onClick={timerController} className='bg-green-500 px-4 py-2 rounded'>{isRunning ? "Pause" : "Start"}</button>
         <button onClick={reset} className='bg-red-500 px-4 py-2 rounded ml-4'>Reset</button>
      </div>
    </div>
  )
}

export default App