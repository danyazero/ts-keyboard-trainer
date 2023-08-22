import React, {FC} from 'react';
import {ToggleSwitch} from "@/shared/ToggleSwitch";
import {dPropsStartType, propsStartType} from "@/pages/Start/ui/StartContainer";
import { useNavigate } from "react-router-dom";
import st from "./Start.module.css"

export const Start:FC<propsStartType & dPropsStartType> = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className={st.start}>
                <div className={st.container}>
                    <button onClick={() => navigate('/game')}>Start Game</button>
                    <div className={st.settings}>
                        <ToggleSwitch description={"errorAudioHandler"} checked={props.isPlayAudio} name={"Audio"}
                                      onChange={props.setAudioStatus}/>
                        <ToggleSwitch description={"timerStatusHandler"} checked={props.isTimer} name={"Timer"}
                                      onChange={props.setTimerStatus}/>
                    </div>
                </div>

                <div className={st.night}>
                    <div className={st.star}></div>
                    <div className={st.star}></div>
                    <div className={st.star}></div>
                    <div className={st.star}></div>
                    <div className={st.star}></div>
                    <div className={st.star}></div>
                </div>
            </div>
        </>
    );
}