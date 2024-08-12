/* eslint-disable react/prop-types */
import { useAuth } from "../context/AuthContext"
import { Navigate } from "react-router";
function ProtectedRoute({children}) {
    const {isAuthenticated} = useAuth();
    return isAuthenticated ? children : <Navigate to="/" replace/>
}

export default ProtectedRoute
