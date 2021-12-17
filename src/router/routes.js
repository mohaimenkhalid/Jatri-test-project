import Home from '../views/HomePage'
import Login from '../views/auth/LoginPage'
import UserList from '../views/user'
import UserDetails from '../views/user/user-details'
import Albums from '../views/album'
import AlbumDetails from '../views/album/album-details'
import PostList from '../views/posts'
import PostDetails from '../views/posts/post-details'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/users', name: 'user',  component: UserList },
    { path: '/users/:id', name: 'UserDetails',  component: UserDetails },
    { path: '/albums', name: 'albums',  component: Albums },
    { path: '/albums/:id', name: 'albumDetails',  component: AlbumDetails },
    { path: '/posts', name: 'post',  component: PostList },
    { path: '/posts/:id', name: 'postDetails',  component: PostDetails },
]

export default routes;
