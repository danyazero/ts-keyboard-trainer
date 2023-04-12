import React, {FC} from 'react';
import st from "./Words.module.css"
import {propsWordsType, dPropsWordsType} from "./WordsContainer";
import Letter from "./Letter/Letter";

const Words: FC<propsWordsType & dPropsWordsType> = (props) => {
    console.log([...props.word])

    const word = [...props.word].map((el, id) => <Letter key={"letter_" + id} letter={el}/>)

    return (
        <div className={st.container}>
            {word}
        </div>
    )
};

export default Words;