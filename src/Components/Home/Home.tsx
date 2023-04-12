import React, {createRef, FC, KeyboardEventHandler, useEffect, useState} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import st from "./Home.module.css"
import {KeysContainer} from "./Keys/KeysContainer";
import {WordsContainer} from "./Words/WordsContainer";

const Home: FC<propsHomeType & dPropsHomeType> = (props) => {

    const [value, setValue] = useState("")

    // useEffect(()=> {
    //     props.createWord()
    // }, [props.selected])
    const keyPressed = (e: any) => {
        if (e.key.length  == 1){
            setValue(prevState => prevState + e.key)
        }
    }

    return (
        <><div className={st.home} onKeyDown={keyPressed} tabIndex={0}>
            <KeysContainer/>
            <WordsContainer/>
            </div>
        </>
    )
};

export default Home;