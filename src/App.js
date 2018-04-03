import React, { Component } from 'react';
import SearchForm from './components/search_form';
import ResultList from './components/result_list';

class App extends Component {
    render() {
        return (
            <div className="App">
                <SearchForm />
                <ResultList />
            </div>
        );
    }
}

export default App;
