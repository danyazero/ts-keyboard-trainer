import React, {createRef, FC, KeyboardEventHandler, useEffect, useState} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import st from "./Home.module.css"
import {KeysContainer} from "./Keys/KeysContainer";
import {WordsContainer} from "./Words/WordsContainer";
import {TimerContainer} from "./Timer/TimerContainer";
import {ResultsContainer} from "./Results/ResultsContainer";

const Home: FC<propsHomeType & dPropsHomeType> = (props) => {
    function keyPressed(e: any) {
        if (e.key.length == 1) {
            props.checkSpell(e.key)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', keyPressed)
    }, [])

    return (
        <>
            <div className={st.home}>
                {
                    props.started ? <TimerContainer/> : <ResultsContainer/>
                }
                <KeysContainer/>
                <WordsContainer/>
            </div>
        </>
    )
};

export default Home;