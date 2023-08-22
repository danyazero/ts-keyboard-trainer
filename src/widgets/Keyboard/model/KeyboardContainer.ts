import {connect} from "react-redux";
import {Dispatch} from "@reduxjs/toolkit";
import Keyboard from "../ui/Keyboard";
import {RootState} from "../../../Redux/store";

export type propsKeyboardType = {
    layoutLetters: string,
    lastActive: string
}

function mapStateToProps(state: RootState): propsKeyboardType {
    return {
        layoutLetters: state.home.letters,
        lastActive: state.home.lastActive
    }
}

export type dPropsKeyboardType = {

}

function mapDispatchToProps(dispatch: Dispatch<any>): dPropsKeyboardType {
    return {

    }
}

export const KeyboardContainer = connect(mapStateToProps, mapDispatchToProps)(Keyboard)