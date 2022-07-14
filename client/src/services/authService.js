import http from "./http-service";

const usersEndpoint = 'http://localhost:3900/api/auth';

export function login(user) {
    return http.post(usersEndpoint, user);
}