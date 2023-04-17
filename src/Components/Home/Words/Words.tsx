import React, {FC} from 'react';
import st from "./Words.module.css"
import {dPropsWordsType, propsWordsType} from "./WordsContainer";
import Letter from "./Letter/Letter";
import {LetterStatusEnum} from "../../../Models/Model";

const Words: FC<propsWordsType & dPropsWordsType> = (props) => {

    function correctnessLetters(id: number, filled: number, errors: number[]): LetterStatusEnum{
        if (id <= filled && !errors.includes(id)){
            return LetterStatusEnum.RIGHT
        }
        if (id <= filled && errors.includes(id)){
            return LetterStatusEnum.CORRECTED
        }
        if (errors.includes(id)){
            return  LetterStatusEnum.ERROR
        }
        return LetterStatusEnum.NORMAL
    }

    const word = [...props.word].map((el, id) => <Letter isCorrect={correctnessLetters(id, props.letterId, props.errorLetters)} key={"letter_" + id} letter={el}/>)

    return (
        <div className={st.container}>
            {word}
        </div>
    )
};

export default Words;