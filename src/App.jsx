import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/Context';
import LoginPage from './pages/LoginPage';
// import HomePage from './pages/HomePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignInPage from './pages/SignInPage';
import ForgotPassword from './pages/ForgotPassword';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import { Provider } from 'react-redux';
import store from './store';
import ReportsPage from './pages/ReportsPage';
import InsightPage from './pages/InsightPage';
import TradePage from './pages/TradePage';
import SettingPage from './pages/SettingPage';
import PrivateRoute from './routes/PrivateRoute';
import NotFoundPage from './pages/NotFoundPage';


export default function App() {

    
  return (
    <Provider store={store}>
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignInPage />} />
                    <Route path="/forgotpassword" element={<ForgotPassword />} />
                    <Route path="/resetPassword" element={<ForgotPasswordPage />} />
                    
                    {/* <Route path="/home" element={
                        <PrivateRoute>
                            <HomePage />
                        </PrivateRoute>
                    } /> */}
                    <Route path="/reports" element={
                        <PrivateRoute>
                            <ReportsPage />
                        </PrivateRoute>
                    } />
                    <Route path="/insight" element={
                        <PrivateRoute>
                            <InsightPage />
                        </PrivateRoute>
                    } />
                    <Route path="/trade" element={
                        <PrivateRoute>
                            <TradePage />
                        </PrivateRoute>
                    } />
                    <Route path="/settings" element={
                        <PrivateRoute>
                            <SettingPage />
                        </PrivateRoute>
                    } />
                    <Route path="/*" element={
                        <PrivateRoute>
                            <NotFoundPage />
                        </PrivateRoute>
                    } />
                    
                </Routes>
            </AuthProvider>
      </Router>
      <ToastContainer />
      </Provider>
    );
}
