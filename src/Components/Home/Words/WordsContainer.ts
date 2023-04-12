import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Words from "./Words";
import {RootState} from "../../../Redux/store";

export type propsWordsType = {
    word: string
}

function mapStateToProps(state: RootState): propsWordsType{
    return{
        word: state.home.word
    }
}

export type dPropsWordsType = {

}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsWordsType{
    return{

    }
}

export const WordsContainer = connect(mapStateToProps, mapDispatchToProps)(Words)