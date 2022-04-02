import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Auth/login';
import Signup from './Auth/signup';
import Dashboard from './User/dashboard';
import './global.scss'

function App() {
	const [authenticated, setAuth] = React.useState(false)

	React.useEffect(() => {
		const localUser = JSON.parse(localStorage.getItem('user'))
		if (localUser && localUser.accessToken && localUser.refreshToken) setAuth(true)
	}, [])
	return (
		<>
			<Routes>
				{/* Default route */}
				{authenticated ? <Route path='/' element={<Dashboard />} /> : <Route path='/' element={<Login />} />}
				{/* Auth routes */}
				<Route path='/login' element={<Login />} />
				<Route path='/signup' element={<Signup />} />
				{/* User routes */}
				<Route path='/dashboard' element={<Dashboard />} />
			</Routes>
		</>
	);
}

export default App;
