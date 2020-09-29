import { baseApiUrl } from './BaseUrl';

export const GetUserProfile = (token) => {
    console.log(token);
    const bearerToken = 'PUB_TOKEN_BEARER ' + token;
    return fetch(baseApiUrl + "/users/one", { headers: { PUB_AUTH: bearerToken } })
        .then(
            response => {
                if (response.ok) {
                    return response.json();
                } else {
                    var error = new Error(
                        "Error " + response.status + ": " + response.statusText
                    );
                    error.response = response;
                    throw error;
                }
            },
            error => {
                console.log(error);
            }
        );
};