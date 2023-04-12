import React, {FC} from 'react';
import st from "./Letter.module.css"

const Letter: FC<{letter: string}> = (props) => {
    return (
        <>
            <p className={st.letter}>
                {props.letter == " " ? "_" : props.letter}
            </p>
        </>
    )
};
export default Letter;