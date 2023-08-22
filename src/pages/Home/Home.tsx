import React, {FC, useEffect} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import st from "./Home.module.css"
import {KeysContainer} from "@/entities/Keys";
import {WordsContainer} from "@/widgets/Words";
import {TimerContainer} from "@/features/Timer";
import {ResultsContainer} from "@/widgets/Results";
import {ToggleSwitch} from "@/shared/ToggleSwitch";
import {KeyboardContainer} from "@/widgets/Keyboard";

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

            <div className={st.home}>
                <div className={st.settingsBar}>

                    {
                        props.started ? (props.isTimer ? <TimerContainer/> : "") : (props.length > 0 ?
                            <ResultsContainer/> : "")
                    }
                </div>

                <div className={st.main}>
                    <KeysContainer/>
                    <WordsContainer/>
                    {props.started ? <KeyboardContainer/> : ""}
                </div>

            </div>
        </>
    )
};

export default Home;