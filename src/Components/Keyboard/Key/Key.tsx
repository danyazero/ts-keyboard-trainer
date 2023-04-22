import React, {FC} from 'react';
import st from "./Key.module.css"

type propsKeyType = {
    letter: string,
    isActive: boolean
}

const Key: FC<propsKeyType> = (props) => {
    return (
        <>
            <div className={st.key + " " + (props.isActive ? st.active : st.normal)}>
                {props.letter}
            </div>
        </>
    )
};

export default Key;