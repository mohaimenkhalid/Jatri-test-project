import axios from "axios";
import {userApiRoute} from '@/helpers/apiRoutes'
import {authHeader} from '@/helpers/authHeader'

function login(formData) {
    return new Promise((resolve, reject) => {
        return axios.get(userApiRoute.userLogin, {authHeader})
            .then(response => {
                let result = response.data.filter(user => user.email == formData.email &&
                    user.username == formData.password)
                resolve(result)
            })
            .catch(error => reject(error))
    });



}

export const userService = {
    login
};
