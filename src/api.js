const BASE_API = 'https://hacker-news.firebaseio.com/v0/';

export class Api {
    static getTopStoryIds = function () {
        return fetch(`${BASE_API}/topstories.json`)
            .then(result => result.json());
    }

    static getStoryInfo = function (storyId) {
        return fetch(`${BASE_API}/item/${storyId}.json`)
            .then(result => result.json());
    }

    static getAuthorInfo = function (authorId) {
        return fetch(`${BASE_API}/user/${authorId}.json`)
            .then(result => result.json());
    }
}