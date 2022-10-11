import { Route, Routes } from 'react-router-dom'
import LoginPage from '../../pages/LoginPage'
import ProfilePage from '../../pages/ProfilePage'
import SignUpPage from '../../pages/SignUpPage'
import { PrivateRoute } from './PrivateRoute'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>home</div>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
                path="/profile"
                element={
                    <PrivateRoute>
                        <ProfilePage />
                    </PrivateRoute>
                }
            />
        </Routes>
    )
}

export default AppRoutes