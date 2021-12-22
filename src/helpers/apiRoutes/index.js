const BASE_URL = "https://jsonplaceholder.typicode.com";

const userEndpoint = BASE_URL+'/users';
const postEndpoint = BASE_URL+'/posts';
const todosEndpoint = BASE_URL+'/todos';
const albumsEndpoint = BASE_URL+'/albums';
const albumPhotoEndpoint = BASE_URL+'/photo';
const commentsEndpoint = BASE_URL+'/comments';

export const userApiRoute = {
    userEndpoint,
    postEndpoint,
    todosEndpoint,
    albumsEndpoint,
    albumPhotoEndpoint,
    commentsEndpoint
}
