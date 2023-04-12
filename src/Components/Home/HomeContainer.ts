import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Home from "./Home";
import {RootState} from "../../Redux/store";
import {initialize} from "../../Redux/home";

export type propsHomeType = {
    selected: string[]
}

function mapStateToProps(state: RootState): propsHomeType {
    return {
        selected: state.home.selected
    }
}

export type dPropsHomeType = {

}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsHomeType {
    return {
    }
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)