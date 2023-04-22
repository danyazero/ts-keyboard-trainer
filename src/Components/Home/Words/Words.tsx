import React, {FC, useEffect} from 'react';
import st from "./Words.module.css"
import {dPropsWordsType, propsWordsType} from "./WordsContainer";
import Letter from "./Letter/Letter";
import {LetterStatusEnum} from "../../../Models/Model";

const Words: FC<propsWordsType & dPropsWordsType> = (props) => {

    useEffect(() => {
        if (props.letterId + 20 >= props.word.length){
            props.updateWord()
        }
    }, [props.letterId])

    function correctnessLetters(id: number, filled: number, errors: number[]): LetterStatusEnum{
        if (id <= filled && !errors.includes(id)){
            return LetterStatusEnum.RIGHT
        }
        if (errors.includes(id)){
            return  LetterStatusEnum.ERROR
        }
        return LetterStatusEnum.NORMAL
    }

    const sides: number = 20;
    const start = props.letterId > sides ? props.letterId - sides : 0
    const end = props.letterId + sides <= props.word.length ? props.letterId + sides : props.word.length

    const word = [...props.word].map((el, index) => { if (!props.started || start <= index && index <= end) return <Letter isCorrect={correctnessLetters(index, props.letterId, props.errorLetters)} key={"letter_" + index} letter={el}/>})

    return (
        <div className={st.container}>
            {word}
        </div>
    )
};

export default Words;