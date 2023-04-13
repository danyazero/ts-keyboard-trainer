import React, {createRef, FC, KeyboardEventHandler, useEffect, useState} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import st from "./Home.module.css"
import {KeysContainer} from "./Keys/KeysContainer";
import {WordsContainer} from "./Words/WordsContainer";

const Home: FC<propsHomeType & dPropsHomeType> = (props) => {
    const keyPressed = (e: any) => {
        if (e.key.length  == 1){
            props.checkSpell(e.key)
        }
    }

    return (
        <><div className={st.home} onKeyDown={keyPressed} tabIndex={0}>
            <h2>{props.errors}</h2>
            <KeysContainer/>
            <WordsContainer/>
            </div>
        </>
    )
};

export default Home;