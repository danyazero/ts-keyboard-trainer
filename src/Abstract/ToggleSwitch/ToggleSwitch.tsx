import React, {createRef, FC, useRef, useState} from 'react';
import st from "./ToggleSwitch.module.css"

type propsToggleSwitchType = {
    description: string,
    checked: boolean,
    name: string,
    onChange(status: boolean): void
}

const ToggleSwitch: FC<propsToggleSwitchType> = (props) => {

    const [status, setStatus] = useState(props.checked)
    let checkboxRef = createRef()

    function onToggleSwitchClickHandler(){
        props.onChange(!status)
        setStatus(prevState => !prevState)

    }

    return (
        <div className={st.switchContainer}>
            <div className={st.switch} onClick={onToggleSwitchClickHandler}>
                <input
                    type="checkbox"
                    name={props.name}
                    className={st.input}
                    id={props.description}
                    checked={status}
                    onChange={()=>{}}
                />
                <span className={st.slider}/>
            </div>
                <label>{props.name}</label>
        </div>
    )
};

export default ToggleSwitch;