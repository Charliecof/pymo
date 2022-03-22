import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './pages/Form';
import FormHospital from './pages/NewHospital';
import Admin from './pages/Admin';
import './styles.css'
export default function App() {
	return (
		<div className="app">
			<Routes>
				<Route path="/newPeticion" element={<Form />} />
				<Route path="/admin" element={<Admin/>} />
				<Route path="/hospitalForm" element={<FormHospital />} />
			</Routes>
		</div>
	);
}
