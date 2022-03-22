import React from 'react';
import './styles.css'
export default function Card({children,title}) {
	return (
		<>
			<div className="card bg-light" >
				<div className="card-header ">
					<div className="text-black-main h4 text-center">
						{title}
					</div>
				</div>
				<div className="card-body text-black">
					{children}
				</div>
			</div>
		</>
	);
}
