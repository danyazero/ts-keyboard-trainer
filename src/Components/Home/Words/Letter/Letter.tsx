import React, {FC} from 'react';
import st from "./Letter.module.css"

const Letter: FC<{letter: string, isCorrect: boolean}> = (props) => {
    return (
        <>
            <p className={st.letter} style={{color: props.isCorrect ? "green" : "whitesmoke"}}>
                {props.letter == " " ? "_" : props.letter}
            </p>
        </>
    )
};
export default Letter;