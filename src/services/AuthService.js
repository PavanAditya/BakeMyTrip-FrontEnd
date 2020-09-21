import { baseApiUrl } from './BaseUrl';

export const googleAuth = () => {
    window.location.href = `${baseApiUrl}/passport/google`;
    return;
};