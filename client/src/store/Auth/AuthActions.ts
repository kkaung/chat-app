import { RegisterUser, LoginUser } from '../../type';
import { api, decodeToken } from '../../utilities';
import { Dispatch } from './AuthContext';

async function registerUser(dispatch: Dispatch, inputs: RegisterUser) {
    dispatch({ type: 'REGISTER_PENDING' });
    try {
        const res = await api.post('/auth/register', inputs);
        dispatch({ type: 'REGISTER_SUCCESS', payload: res.data });
    } catch (err: any) {
        dispatch({
            type: 'REGISTER_FAILED',
            payload: err.response.data.message as string,
        });
    }
}

async function loginUser(dispatch: Dispatch, inputs: LoginUser) {
    dispatch({ type: 'LOGIN_PENDING' });

    try {
        const res = await api.post('/auth/login', inputs);
        const token = res.data.token;

        console.log(token);

        const user = decodeToken(token);

        localStorage.setItem('user', JSON.stringify(user));

        dispatch({ type: 'LOGIN_SUCCESS', payload: user });
    } catch (err: any) {
        dispatch({
            type: 'LOGIN_FAILED',
            payload: err.response.data.message as string,
        });
    }
}

async function logoutUser(dispatch: Dispatch) {
    try {
        const user = JSON.parse(localStorage.getItem('user') as string);
        if (!user) {
            throw new Error('Unable to log out user!');
        }

        localStorage.removeItem('user');

        dispatch({ type: 'LOGOUT_SUCCESS' });
    } catch (err: any) {
        console.error(err.message);
    }
}

export { registerUser, loginUser, logoutUser };
