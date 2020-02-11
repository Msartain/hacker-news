import React, { useState, useEffect } from 'react';
import { getStory } from '../services/hnAPI'

export const Story = ({ storyId }) => {
    const [story, setStory] = useState({});
    useEffect(() => {
        //use the getStory func to get the story with the id, then if the 
        //if the data that is returned has a url property, setState with the data
        getStory(storyId).then(data => data && data.url && setStory(data))
    }, []);

    return <p>I am a story {storyId}</p>;
}