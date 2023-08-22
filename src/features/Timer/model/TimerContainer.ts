import {RootState} from "@/Redux/store";
import {Dispatch} from "@reduxjs/toolkit";
import {connect} from "react-redux";
import Timer from "../ui/Timer";
import {stopGame} from "@/Redux/home";

export type timerPropsType = {
    started: boolean
}

function mapStateToProps(state: RootState): timerPropsType{
    return{
        started: state.home.started
    }
}
export type dTimerPropsType = {
    stopGame(): void
}
function mapDispatchToProps(dispatch: Dispatch<any>): dTimerPropsType{
    return{
        stopGame(){
            dispatch(stopGame())
        }
    }
}

export const TimerContainer = connect(mapStateToProps, mapDispatchToProps)(Timer)