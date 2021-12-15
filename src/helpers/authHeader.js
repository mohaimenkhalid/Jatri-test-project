export function authHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return {
            'Accept' : 'application/json',
            "Content-Type": "application/json",
            'Authorization': 'Bearer ' + user.token
        };
    }
    return {
        'Accept' : 'application/json',
        "Content-Type": "application/json",
    };
}
