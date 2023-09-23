import { Navigate } from 'react-router-dom'
import { useUserAuth } from '../context/userAuthContext'

const AdminRoute = ({ children }) => {
    const { currentUser } = useUserAuth();
    return currentUser.uid==="lBAjgfyPMfaKL78TGtltUEsvIme2" ? children : <Navigate replace to="/home" />
};

export default AdminRoute;