import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [time,setTime] = useState(0) ;
    useEffect(()=>{
      const token = setInterval(() => {
        setTime(time+1);
      }, 1000);

      return()=>{
        clearInterval(token) ;
      }
    },[time]);


    const seconds = `0${time%60}`.slice(-2) ;
    const minutes = Math.floor(time/60) ;
    const formatedMinutes = `0${minutes}`.slice(-2) ;
    

  return (
    
    <div>{formatedMinutes}:{seconds}</div>
  )
}

export default Timer