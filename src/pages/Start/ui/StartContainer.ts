import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import {RootState} from "@/Redux/store";
import {setAudioStatus, setTimerStatus} from "@/Redux/home";
import {Start} from "@/pages/Start/ui/Start";

export type propsStartType = {
    started: boolean,
    isPlayAudio: boolean,
    isTimer: boolean,
    alphabet: string[]
}

function mapStateToProps(state: RootState): propsStartType {
    return {
        started: state.home.started,
        isPlayAudio: state.home.isPlayAudio,
        isTimer: state.home.isTimer,
        alphabet: state.home.selectedLetters
    }
}

export type dPropsStartType = {
    setAudioStatus(status: boolean): void,
    setTimerStatus(status: boolean): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsStartType {
    return {
        setAudioStatus(status: boolean){
            dispatch(setAudioStatus(status))
        },
        setTimerStatus(status: boolean){
            dispatch(setTimerStatus(status))
        }
    }
}

export const StartContainer = connect(mapStateToProps, mapDispatchToProps)(Start)