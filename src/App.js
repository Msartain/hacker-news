import React, { useEffect, useState } from 'react';
import {getStoryIds} from './services/hnAPI';

export const App = () => {
    const [storyIds, setStoryIds] = useState([]);

    useEffect(() => {
        console.log(getStoryIds().then(data => setStoryIds(data)))
    }, [])

    return <p>{storyIds}</p>
    
}


