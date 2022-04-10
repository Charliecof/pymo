import React from 'react';

export default function Home() {
	return (
		<div className="container">
			<div className="row">
				<div className="col">
					<div className="d-flex justify-content-center" style={{ width: '100%' }}>
						<button className="btn btn-secondary m-5" onClick={()=>{window.location.replace('/admin')}} >
							<h2>Admin</h2>
						</button>
						<button className="btn btn-secondary m-5" onClick={()=>{window.location.replace('/newPeticion')}} >
							<h2>Formulario</h2>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
