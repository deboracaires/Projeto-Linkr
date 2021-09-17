import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v3/linkr";

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

export {
    getUserPosts,
    publish
}
