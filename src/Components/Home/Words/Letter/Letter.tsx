import React, {FC} from 'react';
import st from "./Letter.module.css"
import {LetterStatusEnum} from "../../../../Models/Model";

const Letter: FC<{letter: string, isCorrect: LetterStatusEnum}> = (props) => {
    return (
        <>
            <p className={st.letter + " " + props.isCorrect} >
                {props.letter}
            </p>
        </>
    )
};
export default Letter;