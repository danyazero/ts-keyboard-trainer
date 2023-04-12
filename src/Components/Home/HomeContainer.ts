import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Home from "./Home";
import {RootState} from "../../Redux/store";

export type propsHomeType = {}

function mapStateToProps(state: RootState): propsHomeType {
    return {}
}

export type dPropsHomeType = {}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsHomeType {
    return {}
}

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)