import axios from "axios";
import {userApiRoute} from '@/helpers/apiRoutes'
import {authHeader} from '@/helpers/authHeader'

function login(formData) {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.userEndpoint, {authHeader})
            .then(response => {
                let result = response.data.filter(user => user.email === formData.email &&
                    user.username === formData.password)
                resolve(result)
            })
            .catch(error => reject(error))
    });
}

function getAllUsersList() {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.userEndpoint, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

function addNewUser(formData) {
    return new Promise((resolve, reject) => {
        return axios.post(userApiRoute.userEndpoint, formData, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

function updateUser(formData) {
    return new Promise((resolve) => {
        return axios.put(userApiRoute.userEndpoint+`/${formData.id}`, {formData}, {authHeader})
            .then(response => {
                resolve(response.data)
            })
            .catch(error => console.log(error))
    });
}

function deleteUser(id) {
    return new Promise((resolve, reject) => {
        return axios.delete(userApiRoute.userEndpoint+`/${id}`, {authHeader})
            .then(response => resolve(response.data))
            .catch(error => reject(error))
    });
}

export const userService = {
    login,
    getAllUsersList,
    addNewUser,
    updateUser,
    deleteUser
};
