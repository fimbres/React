import http from "./http-service";

const usersEndpoint = '/auth';

export function login(user) {
    return http.post(usersEndpoint, user);
}