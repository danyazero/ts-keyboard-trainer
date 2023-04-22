import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Home from "./Home";
import {RootState} from "../../Redux/store";
import {checkSpell, setAudioStatus, setTimerStatus} from "../../Redux/home";

export type propsHomeType = {
    started: boolean,
    length: number,
    isPlayAudio: boolean,
    isTimer: boolean,
}

function mapStateToProps(state: RootState): propsHomeType {
    return {
        started: state.home.started,
        length: state.home.currentLetterIndex,
        isPlayAudio: state.home.isPlayAudio,
        isTimer: state.home.isTimer
    }
}

export type dPropsHomeType = {
    checkSpell(charCode: number): void,
    setAudioStatus(status: boolean): void,
    setTimerStatus(status: boolean): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsHomeType {
    return {
        checkSpell(charCode: number){
            dispatch(checkSpell(charCode))
        },
        setAudioStatus(status: boolean){
            dispatch(setAudioStatus(status))
        },
        setTimerStatus(status: boolean){
            dispatch(setTimerStatus(status))
        }
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)