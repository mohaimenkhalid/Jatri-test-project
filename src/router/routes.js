import Home from '../views/HomePage'
import Login from '../views/auth/LoginPage'
import UserList from '../views/user'
import UserDetails from '../views/user/user-details'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/users', name: 'user',  component: UserList },
    { path: '/users/:id', name: 'UserDetails',  component: UserDetails },
]

export default routes;
