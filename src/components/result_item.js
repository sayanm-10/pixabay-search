import React from 'react';

const ResultItem = (props) => {
    const data = props.data;

    return (
        <div className="result-item">
            <div className="card-group col-xs-12 col-sm-6 col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{data.user}</h5>
                        <img className="card-img-top" src={data.results.hits[0].previewURL} alt="pixabay" />
                        <p class="card-text">{  data.message }</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResultItem;