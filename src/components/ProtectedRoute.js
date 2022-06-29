import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/userAuthContext'

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useUserAuth();
    return currentUser ? children : <Navigate replace to="/launch" />
};

export default ProtectedRoute;