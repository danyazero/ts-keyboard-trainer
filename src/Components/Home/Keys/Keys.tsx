import React, {FC} from 'react';
import st from "./Keys.module.css"
import {dPropsKeysType, propsKeysType} from "./KeysContainer";
import Brick from "./Brick/Brick";


const Keys: FC<propsKeysType & dPropsKeysType> = (props) => {

    const bricks = [...props.letters].map((el, id) => <Brick letter={el} addLetter={props.addLetter}
                                                             key={"letter_brick_" + id}/>)
    return (
        <div className={st.bricks}>
            <h2>All Keys</h2>
            {bricks}
            <button disabled={props.word.length != props.id + 1} onClick={() => {props.createWord()}}>Start</button>
        </div>
    )
};

export default Keys;