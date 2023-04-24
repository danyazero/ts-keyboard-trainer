import React, {FC, useState} from 'react';
import {dPropsResultsType, propsResultsType} from "./ResultsContainer";
import st from "./Results.module.css"
import speed from "./../../../assets/speed.svg"
import error from "./../../../assets/error.svg"
import length from "./../../../assets/keyboard.svg"
import StatisticBrick from "../../../Abstract/StatisticBrick/StatisticBrick";



const Results: FC<propsResultsType & dPropsResultsType> = (props) => {

    const [isClosed, setClosed] = useState(false)

    const data = [
        {
            icon: length,
            name: "length",
            data: props.length + 1,
            image: length
        },
        {
            icon: speed,
            name: "speed",
            data: props.symbolsPerSecond,
            image: speed
        },
        {
            icon: error,
            name: "error",
            data: props.errors,
            image: error
        }
    ]

    function closeButtonHandler() {
        setClosed(true)
    }

    const infoBricks = data.map((element, index) => <StatisticBrick key={"info-brick-" + index} name={element.name} data={element.data} image={element.image}/>)

    return (
        <>
            <div className={st.results + (isClosed ? " " + st.closed : "")}>
                <div className={st.header}>
                    <h2 className={st.headerText}>Результати: </h2>
                    <div style={{opacity: "50%"}} onClick={closeButtonHandler}>close</div>
                </div>

                <div className={st.data}>
                    {infoBricks}
                </div>

            </div>
            <div className={st.wrapper + (isClosed ? " " + st.closed : "")}></div>
        </>
    )
};

export default Results;