import React, { Component } from 'react';
import SearchForm from './components/search_form';
import ResultList from './components/result_list';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: [],
            noHit: false
        };
    }

    updateList(listData) {
        if (listData.results.total > 0) {
            this.setState({ 
                listData: [...this.state.listData, listData],
                noHit: false
            });
        } else {
            this.setState({noHit: true});
        }
    }

    render() {
        return (
            <div className="App">
                <div className="row no-gutters">
                    <div className="search-form-container container col-xs-12 col-sm-4 col-md-4">
                        <SearchForm updateList={listData => this.updateList(listData)} noHit={this.state.noHit} />
                    </div>
                    <ResultList listData={this.state.listData} />
                </div>
            </div>
        );
    }
}

export default App;
