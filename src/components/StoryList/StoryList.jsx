import React, { useState, useEffect } from 'react';
import { StoryService } from '../../services/StoryService';
import Spinner from '../Spinner/Spinner';
import StoryItem from '../StoryItem/StoryItem';
import './StoryList.styles.css';

const STORY_LIMIT = 10;

const NewsList = () => {
    const [stories, setStories] = useState([]);

    useEffect(() => {
        (async () => {
            const stories = await StoryService.getStories(STORY_LIMIT);
            setStories(stories)
        })()
    }, []);


    const renderStories = (storiesArr) => {
        const sortedStories = storiesArr.sort((a, b) => a.score - b.score);

        return sortedStories.map(storyProps => {
            return <StoryItem {...storyProps} key={storyProps.id} />
        });
    };

    return (
        <div className='story-list'>
            {
                stories.length
                    ? renderStories(stories)
                    : <Spinner />
            }
        </div>
    );
}


export default NewsList;