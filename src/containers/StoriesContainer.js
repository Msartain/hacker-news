import React, { useEffect, useState } from 'react';
import { getStoryIds, getStory } from '../services/hnAPI';
import { Story } from '../components/Story'

export const StoriesContainer = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        getStoryIds().then(data => setStoryIds(data))
    }, [])

    return storyIds.map(storyId => (
        <Story storyId={storyId} />
    ));
}