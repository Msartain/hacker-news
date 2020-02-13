import React, { useState, useEffect } from "react";
import { getStory } from "../services/hnAPI";
import {
  StoryWrapper,
  StoryTitle,
  StoryMeta,
  StoryMetaElement
} from "../styles/storyStyles";
import { mapTime } from '../mappers/mapperTime';

export const Story = ({ storyId }) => {
  const [story, setStory] = useState({});

  useEffect(() => {
    //use the getStory func to get the story with the id, then if the
    //if the data that is returned has a url property, setState with the data
    getStory(storyId).then(data => data && data.url && setStory(data));
  }, []);

  return story && story.url ? (
    <StoryWrapper data-testid="story">

      <StoryTitle>
        <a href={story.url}>{story.title}</a>
      </StoryTitle>

      <StoryMeta>
        <span className="story__by" data-testid="story-by">
          <StoryMetaElement color="#000">By: </StoryMetaElement>
          {story.by}
        </span>
        <span className="story__time" data-testid="story-time">
          <StoryMetaElement color="#000">Posted: </StoryMetaElement>
            {mapTime(story.time)} ago
        </span>
      </StoryMeta>

    </StoryWrapper>
  ) : null;
};
