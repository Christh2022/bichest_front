import { createContext, useEffect, useState } from 'react';
import authService from '../useFunction/UseFetchAuthService';
import PropTypes from 'prop-types'; 

const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const user = authService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
        }
    }, []);

    const login = (email, password) => {
        return authService.login(email, password).then(user => {
            setCurrentUser(user);
            console.log(user);
            return user;
        });
    };

    const logout = () => {
        authService.logout();
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export { AuthContext };
