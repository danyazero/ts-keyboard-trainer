import React, {createRef, FC, KeyboardEventHandler, useEffect, useState} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import st from "./Home.module.css"
import {KeysContainer} from "./Keys/KeysContainer";
import {WordsContainer} from "./Words/WordsContainer";

const Home: FC<propsHomeType & dPropsHomeType> = (props) => {
    const [time, setTime] = useState(120)
    const [timer, setTimer] = useState(0)
    function keyPressed(e: any) {
        debugger
        if (e.key.length == 1) {
            props.checkSpell(e.key)
        }
    }

    const timerTick = () => {
        setTime(prevState => prevState - 1)
    }

    useEffect(() => {
        window.addEventListener('keydown', keyPressed)
    }, [])

    useEffect(() => {
        if (time === 0){
            window.removeEventListener('keydown', keyPressed)
            clearInterval(timer)
            props.stopGame()
        }
    }, [time])

    useEffect(() => {
        console.log("create timer")
        if (props.started) {
            let timerId = setInterval(timerTick, 1000, time);
            setTimer(timerId)
        } else clearInterval(timer)

        return () => clearInterval(timer)
    }, [props.started])

    return (
        <>
            <div className={st.home}>
                <h2>Time: {time} Length: {props.length + 1} Errors: {props.errors}</h2>
                <KeysContainer/>
                <WordsContainer/>
            </div>
        </>
    )
};

export default Home;