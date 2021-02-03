import { Api } from '../api';
import { shuffle } from '../utils/shuffle';

export class StoryService {
    static async getStories(limit) {
        // 1. Fetch top stories
        // 2. Shuffle stories
        // 3. Return limited array of stories (e.g. 10)
        const storyIds = await Api.getTopStoryIds();
        const shuffledStories = shuffle(storyIds);
        shuffledStories.length = limit;

        // Fetch story info for all 10 stories
        const storyInfo = await Promise.all(shuffledStories.map(async (id) => await Api.getStoryInfo(id)));

        // Fetch stories' authors
        const storyAuthors = await Promise.all(storyInfo.map(async (info) => await Api.getAuthorInfo(info.by)));

        // Create Story object with all needed data
        return storyInfo.map((story) => {
            const { id, by, title, url = null, time, score } = story;
            const author = storyAuthors.find(author => author.id === by);
            return {
                id,
                title,
                url,
                time,
                score,
                authorId: author.id,
                authorKarma: author.karma,
            }
        })

    }
}