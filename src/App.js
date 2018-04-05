import React, { Component } from 'react';
import SearchForm from './components/search_form';
import ResultList from './components/result_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: []
        };
    }

    render() {
        return (
            <div className="App">
                <div className="row no-gutters">
                    <div className="search-form-container container col-xs-12 col-sm-4 col-md-4">
                        <SearchForm updateList={listData => this.setState({ listData: [...this.state.listData, listData] })} />
                    </div>
                    <ResultList listData={this.state.listData} />
                </div>
            </div>
        );
    }
}

export default App;
