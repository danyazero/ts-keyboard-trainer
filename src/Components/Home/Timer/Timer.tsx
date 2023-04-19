import React, {FC, useEffect, useState} from 'react';
import {dTimerPropsType, timerPropsType} from "./TimerContainer";

const Timer: FC<dTimerPropsType & timerPropsType> = (props) =>{

    const [time, setTime] = useState(60)
    const [timer, setTimer] = useState(0)

    const timerTick = () => {
        setTime(prevState => prevState - 1)
    }

    useEffect(() => {
        if (time === 0){
            console.log("cleared")
            clearInterval(timer)
            props.stopGame()
        }
    }, [time])

    useEffect(() => {
        if (props.started) {
            console.log("create timer")
            setTime(60)
            let timerId = setInterval(timerTick, 1000, time);
            setTimer(timerId)
        } else clearInterval(timer)

        return () => clearInterval(timer)
    }, [props.started])

    return(
        <>
            <h2>Time {time}</h2>
        </>
    )
};

export default Timer;