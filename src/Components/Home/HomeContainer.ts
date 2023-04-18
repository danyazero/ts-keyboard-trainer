import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Home from "./Home";
import {RootState} from "../../Redux/store";
import {checkSpell, stopGame} from "../../Redux/home";

export type propsHomeType = {
    selected: string[],
    errors: number,
    length: number,
    started: boolean
}

function mapStateToProps(state: RootState): propsHomeType {
    return {
        selected: state.home.selected,
        errors: state.home.errorCounter,
        length: state.home.letterId,
        started: state.home.started
    }
}

export type dPropsHomeType = {
    checkSpell(letter: string): void,
    stopGame(): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsHomeType {
    return {
        checkSpell(letter: string){
            dispatch(checkSpell(letter))
        },
        stopGame(){
            dispatch(stopGame())
        }
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)