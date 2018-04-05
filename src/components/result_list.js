import React from 'react';
import ResultItem from './result_item';

const ResultList = (props) => {
    const item = props.listData; 
    let resultItem;


    if (props.listData.length > 0) {
        console.log(item);
        resultItem = props.listData.map(item => {
            return (
                <ResultItem key={item.results.hits[0].id} data={item} />
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