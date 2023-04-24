import React, {FC} from 'react';
import st from "./Key.module.css"

type propsKeyType = {
    letter: string,
    isActive: boolean,
    marked: boolean
}

const Key: FC<propsKeyType> = (props) => {
    return (
        <>
            <div className={st.key + " " + (props.isActive ? st.active : st.normal) + " " + (props.marked ? st.marked : "")}>
                {props.letter}
            </div>
                <div className={st.wrapper}></div>
        </>
    )
};

export default Key;