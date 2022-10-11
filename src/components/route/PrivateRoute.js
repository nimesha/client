import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
    const user = null;
    if (!user) {
        // user is not authenticated
        return <Navigate to="/" />;
    }
    return children;
};