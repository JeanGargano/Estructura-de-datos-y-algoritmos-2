// AuthContext.jsx
import React, { createContext, useReducer, useContext } from 'react';
import { authReducer } from './AuthReducer';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const initialState = {
        isAuthenticated: false,
        username: '',
        lastVisited: '/',
    };

    const [state, dispatch] = useReducer(authReducer, initialState);

    const login = (username) => {
        dispatch({ type: 'LOGIN', payload: username });
    };

    const logout = () => {
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ state, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
