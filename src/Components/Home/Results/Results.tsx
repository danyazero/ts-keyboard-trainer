import React, {FC} from 'react';
import {dPropsResultsType, propsResultsType} from "./ResultsContainer";

const Results: FC<propsResultsType & dPropsResultsType> = (props) => {
    return (
        <>
            <h2>Length: {props.length + 1}</h2>
            <h2>Errors: {props.errors}</h2>
            <h2>Per second: {props.symbolsPerSecond}</h2>
        </>
    )
};

export default Results;