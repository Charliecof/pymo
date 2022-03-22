import React, { useState } from 'react';

export default function TabNavigation() {
	const [nav, setNav] = useState('hoy');
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a
                    onClick={()=>setNav('hoy')}
					className={nav === 'hoy' ? 'nav-link active' : 'nav-link'}
					href="#"
				>
					Hoy
				</a>
			</li>
			<li className="nav-item">
				<a
                    onClick={()=>setNav('mes')}
					className={nav === 'mes' ? 'nav-link active' : 'nav-link'}
					href="#"
				>
					Mes
				</a>
			</li>
			<li className="nav-item">
				<a
                    onClick={()=>setNav('anio')}
					className={nav === 'anio' ? 'nav-link active' : 'nav-link'}
					href="#"
				>
					Año
				</a>
			</li>
		</ul>
	);
}
