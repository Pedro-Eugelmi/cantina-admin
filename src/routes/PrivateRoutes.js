import { Navigate, Outlet } from 'react-router-dom';

const PrivateRoute = () => {
    const token = true; //localStorage.getItem('token'); 

    return token ? <Outlet /> : <Navigate to="/?error=access-denied'" />;
};

export default PrivateRoute;