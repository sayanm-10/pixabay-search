import React, { Component } from 'react';
import SearchForm from './components/search_form';
import ResultList from './components/result_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData : null
        };
    }

    render() {
        return (
            <div className="App">
                <SearchForm updateList={listData => this.setState({listData})} />
                <ResultList listData={this.state.listData} />
            </div>
        );
    }
}

export default App;
