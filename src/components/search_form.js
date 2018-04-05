import React, { Component } from 'react';
import { openConnection, searchPixabay } from '../utility/socket_client';
import '../styles/search_form.css';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            searchQuery: '',
            message: '',
            disable_name: false,
            form_error: false
        }

        openConnection((err, listData) => this.props.updateList(listData.results));
    }

    componentWillReceiveProps = (props) => {
        this.setState({noHit: props.noHit});
    }

    onSubmit = async (e) => {
        if (this.state.userName && this.state.searchQuery) {
            searchPixabay({
                user: this.state.userName,
                message: this.state.message,
                query: this.state.searchQuery
            });

            this.setState({
                searchQuery: '',
                message: '',
                disable_name: true,
                form_error: false
            });
        } else {
            this.setState({form_error: true});
        }
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} className="search-form">
                <div className="form-group">
                    <label htmlFor="name">User Name</label>
                    <input type="text" maxLength="15" className="form-control user-name-ip"
                        placeholder="Enter user name" id="name"
                        value={this.state.userName} disabled={this.state.disable_name}
                        onChange={e => this.setState({ userName: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="Search">Search Query</label>
                    <input type="text" className="form-control"
                        placeholder="Search for an image" id="search"
                        value={this.state.searchQuery} onChange={e => this.setState({ searchQuery: e.target.value })} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea rows="2" className="form-control"
                        placeholder="What's your message?" id="message"
                        value={this.state.message} onChange={e => this.setState({ message: e.target.value })} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                {
                    this.state.form_error &&
                    <div className="alert alert-danger" role="alert">
                        Name and search query are mandatory!
                    </div>
                }
                {
                    this.state.noHit &&
                    <div className="alert alert-warning" role="alert">
                        No image found!
                    </div>
                }
            </form>
        );
    }
}

export default SearchForm;