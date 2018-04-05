import React from 'react';
import ResultItem from './result_item';

const ResultList = (props) => {
    let resultItem;

    if (props.listData.length > 0) {
        resultItem = props.listData.map((item, id) => {
            return (
                <ResultItem key={id} data={item} />
            );
        });
    } else {
        resultItem = (
            <h1 className="no-results">
                Results will appear here!
                <hr className="partition" />
            </h1>
        );
    }


    return (
        <div className="result-list-container container row col-xs-12 col-sm-8 col-md-8">
            { resultItem }
        </div>
    );
};

export default ResultList;