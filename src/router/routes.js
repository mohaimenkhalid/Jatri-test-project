import Home from '../views/HomePage'
import Login from '../views/auth/LoginPage'
import UserList from '../views/user'

const routes = [
    { path: '/', name: 'home', component: Home },
    { path: '/login', name: 'login', component: Login },
    { path: '/users', name: 'user',  component: UserList },
]

export default routes;
