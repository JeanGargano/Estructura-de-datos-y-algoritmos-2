// PrivateRoute.jsx
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ element, ...rest }) => {
    const { state } = useAuth();

    return (
        <Route
            {...rest}
            element={state.isAuthenticated ? element : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
