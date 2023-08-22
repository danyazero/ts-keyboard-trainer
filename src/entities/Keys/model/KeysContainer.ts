import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Keys from "../ui/Keys";
import {RootState} from "@/Redux/store";
import {addSelected, getWordsAPI} from "@/Redux/home";

export type propsKeysType = {
    letters: string,
    word: string,
    id: number,
    started: boolean
}

function mapStateToProps(state: RootState): propsKeysType {
    return {
        letters: state.home.letters,
        word: state.home.randomWordsLine,
        id: state.home.currentLetterIndex,
        started: state.home.started
    }
}

export type dPropsKeysType = {
    addLetter(letter: string): any,
    createWord(): any
}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsKeysType {
    return {
        addLetter(letter: string) {
            dispatch(addSelected(letter))
        },
        createWord(){
            dispatch(getWordsAPI())
        }
    }
}

export const KeysContainer = connect(mapStateToProps, mapDispatchToProps)(Keys)