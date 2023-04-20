import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Results from "./Results";
import {RootState} from "../../../Redux/store";

export type propsResultsType = {
    errors: number,
    length: number,
    symbolsPerSecond: number
}

function mapStateToProps(state: RootState): propsResultsType {
    return {
        errors: state.home.errorCounter,
        length: state.home.currentLetterIndex,
        symbolsPerSecond: state.home.symbolsPerSecond
    }
}

export type dPropsResultsType = {

}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsResultsType {
    return {

    }
}

export const ResultsContainer = connect(mapStateToProps, mapDispatchToProps)(Results)