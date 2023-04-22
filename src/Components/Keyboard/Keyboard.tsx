import React, {FC} from 'react';
import {dPropsKeyboardType, propsKeyboardType} from "./KeyboardContainer";
import st from "./Keyboard.module.css"
import Key from "./Key/Key";

const Keyboard: FC<propsKeyboardType & dPropsKeyboardType> = (props) => {
    const marked = ['f', 'j']

    const layout = props.layoutLetters.split("").map((element, index) => <Key key={"keyboard-key-" + index} letter={element} marked={marked.includes(element)}
                                                                              isActive={props.lastActive == element}/>)

    return (
        <div className={st.keyboard}>
            {layout}
        </div>
    )
};

export default Keyboard;