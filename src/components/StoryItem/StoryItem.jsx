import React from 'react';
import './StoryItem.styles.css';

const StoryItem = ({ title, url, time, score, authorId, authorKarma }) => {
    return (
        <div className="story-item">
            <div className="story-property">
                <span className="story-property-name">Title: </span>
                <p>{title}</p>
            </div>
            <div className="story-property">
                <span className="story-property-name">URL: </span>
                <span>{url}</span>
            </div>
            <div className="story-property">
                <span className="story-property-name">Timestamp: </span>
                <span>{time}</span>
            </div>
            <div className="story-property">
                <span className="story-property-name">Score: </span>
                <span>{score}</span>
            </div>
            <div className="story-property">
                <span className="story-property-name">Author ID: </span>
                <span>{authorId}</span>
            </div>
            <div className="story-property">
                <span className="story-property-name">Author Karma Score: </span>
                <span>{authorKarma}</span>
            </div>
        </div>
    );
}

export default StoryItem;