import React from 'react';
import ResultItem from './result_item';

const ResultList = (props) => {
    const item = props.listData; 
    let resultItem;


    if (props.listData) {
        console.log(item);
        resultItem =  (
                <ResultItem key={item.results.hits[0].id} data={item} />
            );
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