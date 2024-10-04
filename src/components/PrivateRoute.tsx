import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';
import { RootState } from '../redux/store'; // Adjust the import path as needed

export default function PrivateRoute() {
    const user = useSelector((state: RootState) => state.auth.user);
    return user ? <Outlet /> : <Navigate to='/' />;
}