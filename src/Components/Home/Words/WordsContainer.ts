import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Words from "./Words";
import {RootState} from "../../../Redux/store";
import {checkSpell} from "../../../Redux/home";

export type propsWordsType = {
    letterId: number,
    word: string,
    started: boolean,
    errorLetters: number[]
}

function mapStateToProps(state: RootState): propsWordsType{
    return{
        word: state.home.randomWordsLine,
        started: state.home.started,
        letterId: state.home.currentLetterIndex,
        errorLetters: state.home.errorLetters
    }
}

export type dPropsWordsType = {

}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsWordsType{
    return{

    }
}

export const WordsContainer = connect(mapStateToProps, mapDispatchToProps)(Words)