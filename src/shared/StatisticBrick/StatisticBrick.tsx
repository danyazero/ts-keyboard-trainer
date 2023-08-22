import React, {FC} from 'react';
import st from "./StatisticBrick.module.css"

type propsStatisticBrickType = {
    name: string,
    data: number,
    image: string
}

const StatisticBrick: FC<propsStatisticBrickType> = (props) => {
    return (
        <div className={st.data}>
            <div className={st.statisticBrick}>
                <img className={st.icon} src={props.image} alt={"icon"}/>
                <div className={st.caption}>
                    <p className={st.dataName}>{props.name}</p>
                    <p className={st.resultData}>{props.data}</p>
                </div>
            </div>
        </div>
        )
};

export default StatisticBrick;