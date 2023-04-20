import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Home from "./Home";
import {RootState} from "../../Redux/store";
import {checkSpell} from "../../Redux/home";

export type propsHomeType = {
    started: boolean,
}

function mapStateToProps(state: RootState): propsHomeType {
    return {
        started: state.home.started,
    }
}

export type dPropsHomeType = {
    checkSpell(letter: string): void
}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsHomeType {
    return {
        checkSpell(letter: string){
            dispatch(checkSpell(letter))
        }
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)