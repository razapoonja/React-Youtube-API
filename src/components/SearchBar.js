import React , { useState } from 'react';

import { Paper, TextField } from '@material-ui/core';

const SearchBar = ({ onFormSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event) => setQuery(event.target.value);

    const onKeyPress = (event) => {
        if (event.key === 'Enter')
            onFormSubmit(query);
    }

    return (
        <Paper elevation={6} style={{ padding: '25px' }}>
            <TextField fullWidth label="Search..." onChange={handleChange} onKeyPress={onKeyPress} />
        </Paper>
    )
}

export default SearchBar;