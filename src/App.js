import React, { Component } from 'react';
import SearchForm from './components/search_form';
import ResultList from './components/result_list';

class App extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         listData : null
    //     };
    // }

    listData (data) {
        return data;
    };

    socketReceiver(inbound) {
        // this.setState({
        //     listData: inbound
        // });
        this.listData(inbound);
    }

    render() {
        return (
            <div className="App">
                <SearchForm />
                <ResultList listData={this.listData()} />
            </div>
        );
    }
}

export default App;
