import React, { useState, useRef } from 'react'

function Countdown() {
  const [activeCountdown, setActiveCountdown] = useState(false)
  const [seconds, setSeconds] = useState(5)
  const intervalRef = useRef(null)

  function iniciar() {
    setActiveCountdown(true)
    intervalRef.current = setInterval(intervalFn, 1000)
  }

  function intervalFn(){
    setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
            return prevSeconds - 1
        } else {
            clearInterval(intervalRef.current)
            return prevSeconds
        }
    })
  }

  function reiniciar() {
    clearInterval(intervalRef.current)
    setSeconds(5)
    setActiveCountdown(false)
  }

  return (
    <>
      <h1>{seconds}</h1>
      <button disabled={activeCountdown} onClick={iniciar}>
        Iniciar
      </button>
      <button onClick={reiniciar} disabled={!activeCountdown}>Reiniciar</button>
    </>
  );
}

export default Countdown

