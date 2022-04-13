import React from 'react';
import Card from '../../components/Card';
import FormPetition from '../../molecules/FormPetition';

export default function Form() {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col"></div>
				<div className="col-lg-6 col-sm-10">
					<div className="pt-4">
						<Card title="Peticion de Insumos">
							<FormPetition />
						</Card>
					</div>
				</div>
				<div className="col"></div>
			</div>
		</div>
	);
}
