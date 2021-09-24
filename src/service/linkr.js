import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr";

function getUserInfo(userId, token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${BASE_URL}/users/${userId}`, config);
    return promise;
}

function getUserPosts(userId, token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${BASE_URL}/users/${userId}/posts`, config);
    return promise;
}

function publish(body, token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/posts`, body, config);
    return promise;
}

function getUserLiked(token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${BASE_URL}/posts/liked`, config);
    return promise;
}

function getLikes(id ,token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const promise = axios.get(`${BASE_URL}/users/${id}`, config);
    return promise;
}

function postLike(id, token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/posts/${id}/like`, {post:true}, config);
    return promise;
}

function postDislike(id, token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/posts/${id}/dislike`, {post:true}, config);
    return promise;
}

function getTrending(token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/hashtags/trending`, config);
    return promise;
}

function postFollow(id, token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/users/${id}/follow`, {post:true}, config);
    return promise;
}

function postUnfollow(id, token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.post(`${BASE_URL}/users/${id}/unfollow`, {post:true}, config);
    return promise;
}

function getFollowing(token) {
    const config  = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(`${BASE_URL}/users/follows`, config);
    return promise;
}

export {
    getUserPosts,
    publish,
    getUserLiked,
    getLikes,
    postLike,
    postDislike,
    getTrending,
    postFollow,
    postUnfollow,
    getFollowing,
    getUserInfo
}
