import React from 'react';

import { Paper, TextField } from '@material-ui/core';

class SearchBar extends React.Component {
    state = {
        query: ''
    }

    handleChange = (event) => { this.setState({ query: event.target.value }) };

    handleSubmit = (event) => {
        const { query } = this.state;
        const { onFormSubmit } = this.props;

        onFormSubmit(query);

        event.preventDefault();
    };

    render () {
        return (
        	<Paper elevation={6} style={{ padding: '25px' }}>
                <form onSubmit={this.handleSubmit}>
                    <TextField fullWidth label="Search..." onChange={this.handleChange} />
                </form>
            </Paper>
    	)
    }
}

export default SearchBar;