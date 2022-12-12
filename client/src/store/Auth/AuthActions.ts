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

export { registerUser, loginUser };
