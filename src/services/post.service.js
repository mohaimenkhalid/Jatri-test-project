import axios from "axios";
import {userApiRoute} from '@/helpers/apiRoutes'
import {authHeader} from '@/helpers/authHeader'

function getAllPostsList() {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.postEndpoint, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

function addNewPost(formData) {
    return new Promise((resolve, reject) => {
        return axios.post(userApiRoute.postEndpoint, formData, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

function updatePost(formData) {
    return new Promise((resolve) => {
        return axios.put(userApiRoute.postEndpoint+`/${formData.id}`, {formData}, {authHeader})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => console.log(error))
    });
}

function getPostByUser(userId) {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.postEndpoint, {authHeader})
            .then(response => {
                let result = response.data.filter(post => post.userId == userId)
                resolve(result)
            })
            .catch(error => reject(error))
    });
}

function deletePost(id) {
    return new Promise((resolve, reject) => {
        return axios.delete(userApiRoute.postEndpoint+`/${id}`, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

function postDetails(id) {
    return new Promise((resolve) => {
        return axios.get(userApiRoute.postEndpoint+`/${id}`, {authHeader})
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                resolve(err.response)
            })
    });
}


function getPostComments(postId) {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.postEndpoint+`/${postId}/comments`, {authHeader})
            .then(response => {resolve(response.data) })
            .catch(error => reject(error))
    });
}


export const postService = {
    getAllPostsList,
    addNewPost,
    updatePost,
    deletePost,
    postDetails,
    getPostByUser,
    getPostComments
};
