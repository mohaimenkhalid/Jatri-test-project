import axios from "axios";
import {userApiRoute} from '@/helpers/apiRoutes'
import {authHeader} from '@/helpers/authHeader'

function getAllAlbumsList() {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.albumsEndpoint, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

function getAlbumPhotos(albumId) {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.albumsEndpoint+`/${albumId}/photos`, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

function albumsDetails(id) {
    return new Promise((resolve) => {
        return axios.get(userApiRoute.albumsEndpoint+`/${id}`, {authHeader})
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                resolve(err.response)
            })
    });
}

export const albumService = {
    getAllAlbumsList,
    albumsDetails,
    getAlbumPhotos
};
