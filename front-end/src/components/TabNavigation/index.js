import React, { useState } from 'react';

export default function TabNavigation({year,handleChange}) {
	
	return (
		<ul className="nav nav-tabs">
			<li className="nav-item">
				<a
                    onClick={()=>handleChange('20')}
					className={year === '20' ? 'nav-link active' : 'nav-link'}
					href="#"
				>
					2020
				</a>
			</li>
			<li className="nav-item">
				<a
                    onClick={()=>handleChange('21')}
					className={year === '21' ? 'nav-link active' : 'nav-link'}
					href="#"
				>
					2021
				</a>
			</li>
			<li className="nav-item">
				<a
                    onClick={()=>handleChange('22')}
					className={year === '22' ? 'nav-link active' : 'nav-link '}
					href="#"
				>
					2022
				</a>
			</li>
		</ul>
	);
}
