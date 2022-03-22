import React from 'react';
import Card from '../../components/Card';
import FormHospital from '../../molecules/FormHospital';

export default function NewHospital() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col"></div>
				<div className="col">
					<Card title="Peticion de Insumos">
						<FormHospital />
					</Card>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
}
