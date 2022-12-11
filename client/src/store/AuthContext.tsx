import React, {
    useReducer,
    createContext,
    PropsWithChildren,
    ReducerAction,
    ReducerState,
    useContext,
} from 'react';

const initialState = {
    isAuthenticated: false,
    error: null,
    message: null,
    user: null,
};

const AuthContext = createContext(initialState);

function reducer(state: ReducerState<any>, action: ReducerAction<any>) {
    // switch (action.type) {
    //     default:
    //         throw new Error('');
    // }
}

export function Provider({ children }: PropsWithChildren) {
    const [state, dispatch] = useReducer<any>(reducer, initialState);

    return (
        <AuthContext.Provider value={{ ...initialState }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
