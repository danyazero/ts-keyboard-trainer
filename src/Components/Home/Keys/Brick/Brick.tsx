import React, {FC, useState} from 'react';
import st from "./Brick.module.css"

type brickType = {
    letter: string,
    addLetter(letter: string): any
}
const Brick: FC<brickType> = (props) => {
    const [active, setActive] = useState(true)
    const addLetter = () => {
        setActive(!active)
        props.addLetter(props.letter)
    }
    return (
        <>
            <div onClick={addLetter}
                 className={st.brick + " " + (active ? st.active : st.normal)}>{props.letter}</div>
        </>
    )
};

export default Brick;