import React from 'react';

export default function Home() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="d-flex justify-content-center" style={{ width: '100%' }}>
						<a className="p-3" href="/admin">
							<h2>Admin</h2>
						</a>
						<a className="p-3" href="/newPeticion">
							<h2>Formulario</h2>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
