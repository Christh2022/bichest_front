import  { useContext } from 'react';
import {  Navigate } from 'react-router-dom';
import PropTypes from 'prop-types'
import { AuthContext } from '../context/Context';

const PrivateRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);

  return currentUser ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
}