import React, {FC} from 'react';
import {dPropsHomeType, propsHomeType} from "./HomeContainer";
import {KeysContainer} from "./Keys/KeysContainer";

const Home: FC<propsHomeType & dPropsHomeType> = (props) => {
    return (
        <>
            <KeysContainer/>
        </>
    )
};

export default Home;