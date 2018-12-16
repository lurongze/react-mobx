
const authTokenKey = 'authorization';

export function getAuthToken() {
    return localStorage.getItem(authTokenKey) || '';
}

export function setAuthToken(value) {
    return localStorage.setItem(authTokenKey, value);
}

export function clearAuthToken() {
    return localStorage.removeItem(authTokenKey);
}