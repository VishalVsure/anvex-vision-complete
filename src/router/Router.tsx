import App from '@/App';
import Dashboard from '@/pages/Dashboard';
import LoginPage from '@/pages/Login';
import SignUpPage from '@/pages/Signup';
import {Routes, Route } from 'react-router-dom';

const Router: React.FC = () => (
	
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/dash" element={<Dashboard />} />
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignUpPage/>} />
		</Routes>
);
export default Router