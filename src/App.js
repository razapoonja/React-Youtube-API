import React , { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';
import youtube from './api/youtube';

import { SearchBar, VideoDetail, VideoList } from './components';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        handleSubmit('React JS');
    })

    const handleSubmit = async (query) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: '[API_KEY]',
                q: query
            }
        });

        setVideos(response.data.items)
        setSelectedVideo(response.data.items[0])
    }

    return (
        <Grid justify="center" container spaceing={10}>
            <Grid item xs={12}>
                <Grid container spaceing={10}>
                    <Grid item xs={12}>
                        <SearchBar onFormSubmit={handleSubmit} />
                    </Grid>
                    <Grid item xs={8}>
                        <VideoDetail video={selectedVideo} />
                    </Grid>
                    <Grid item xs={4}>
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default App;