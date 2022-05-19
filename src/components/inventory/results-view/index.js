import React from 'react';
import { FullPage } from "./style"
import ResultView from "./result-view"

const ResultsView = ({results}) => {
    return (
        <FullPage>
            {
                results?.map(result => {
                    return <ResultView result={result} />
                })
            }
        </FullPage>
    );
};

export default ResultsView;