import jwt_decode from 'jwt-decode';

export default function decodeToken(token: string) {
    return jwt_decode(token);
}
