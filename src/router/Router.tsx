import App from '@/App';
import DashboardLayout from '@/layout/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import LoginPage from '@/pages/Login';
import Management from '@/pages/Management';
import SignUpPage from '@/pages/Signup';
import {Routes, Route } from 'react-router-dom';

const Router: React.FC = () => (
		<Routes>
			<Route path="/" element={<App />} />
			<Route path="/signup" element={<SignUpPage/>} />
			<Route path="/login" element={<LoginPage />} />

			<Route path="/" element={<DashboardLayout />} >
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="/manage" element={<Management/>} />
			</Route>
		</Routes>
);
export default Router