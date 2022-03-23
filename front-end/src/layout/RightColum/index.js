import React from 'react';
import './styles.css';
export default function RightColumn({ children }) {
	return (
		<div className="rightColumn" style={{ height:'100%' }}>
			{children}
		</div>
	);
}
