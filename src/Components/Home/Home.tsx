import React, {createRef, FC, KeyboardEventHandler, useEffect, useState} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import st from "./Home.module.css"
import {KeysContainer} from "./Keys/KeysContainer";
import {WordsContainer} from "./Words/WordsContainer";
import {TimerContainer} from "./Timer/TimerContainer";

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
                <TimerContainer/>
                <h2>Length: {props.length + 1} Errors: {props.errors}</h2>
                <KeysContainer/>
                <WordsContainer/>
            </div>
        </>
    )
};

export default Home;