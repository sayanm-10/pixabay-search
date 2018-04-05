import React from 'react';
import ResultItem from './result_item';

const ResultList = (props) => {
    let resultItem;

    if (props.listData) {
        resultItem = props.listData.map(datum => {
            return (
                <ResultItem key={datum.results.hits[0].id} details={datum} />
            );
        });
    } else {
        resultItem = (
            <div>
                Results will appear here!
            </div>
        );
    }


    return (
            <div className="result-list-container container row col-xs-12 col-sm-8 col-md-9">
                { resultItem }
            </div>
    );
};

export default ResultList;