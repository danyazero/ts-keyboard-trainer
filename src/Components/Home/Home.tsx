import React, {createRef, FC, KeyboardEventHandler, useEffect, useState} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import st from "./Home.module.css"
import {KeysContainer} from "./Keys/KeysContainer";
import {WordsContainer} from "./Words/WordsContainer";
import {TimerContainer} from "./Timer/TimerContainer";
import {ResultsContainer} from "./Results/ResultsContainer";
import ToggleSwitch from "../../Abstract/ToggleSwitch/ToggleSwitch";
import {setAudioStatus} from "../../Redux/home";
import {KeyboardContainer} from "../Keyboard/KeyboardContainer";

const Home: FC<propsHomeType & dPropsHomeType> = (props) => {
    function keyPressed(e: any) {
        if (e.key.length == 1) {
            props.checkSpell(e.keyCode)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', keyPressed)
    }, [])

    return (
        <>
            <div className={st.settingsBar}>
                <ToggleSwitch description={"errorAudioHandler"} checked={props.isPlayAudio} name={"Audio"} onChange={props.setAudioStatus}/>
                <ToggleSwitch description={"timerStatusHandler"} checked={props.isTimer} name={"Timer"} onChange={props.setTimerStatus}/>
            </div>
            <div className={st.home}>
                {
                    props.started ? (props.isTimer ? <TimerContainer/> : ""): (props.length > 0 ? <ResultsContainer/> : "")
                }
                <KeysContainer/>
                <WordsContainer/>
                {props.started ? <KeyboardContainer/> : ""}
            </div>
        </>
    )
};

export default Home;