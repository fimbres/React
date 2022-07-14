import http from "./http-service";

const usersEndpoint = 'http://localhost:3900/api/users';

export function register(user) {
    return http.post(usersEndpoint, {
        email: user.email,
        name: user.userName,
        password: user.password,
    });
}