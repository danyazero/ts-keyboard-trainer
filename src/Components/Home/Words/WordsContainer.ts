import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Words from "./Words";
import {RootState} from "../../../Redux/store";
import {checkSpell} from "../../../Redux/home";

export type propsWordsType = {
    letterId: number,
    word: string,
    errorLetters: number[]
}

function mapStateToProps(state: RootState): propsWordsType{
    return{
        word: state.home.word,
        letterId: state.home.letterId,
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