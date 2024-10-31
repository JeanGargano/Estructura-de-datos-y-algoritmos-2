// AuthReducer.js
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated: true,
                username: action.payload,
                lastVisited: state.lastVisited, // Guarda la última página visitada
            };
        case 'LOGOUT':
            return {
                ...state,
                isAuthenticated: false,
                username: '',
            };
        case 'SET_LAST_VISITED':
            return {
                ...state,
                lastVisited: action.payload,
            };
        default:
            return state;
    }
};
