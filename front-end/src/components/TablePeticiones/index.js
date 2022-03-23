import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import { getActivePeticiones, accept } from '../../utils/apiRequests';
export default function TablePeticiones() {
	const [active, setActive] = useState([]);
	useEffect(async () => {
		try {
			const aux = await getActivePeticiones();
			console.log(aux[0]);
			setActive([...aux]);
		} catch (error) {
			console.error(error);
		}
	}, []);
	const acceptHandler = async (e) => {
		accept(e.target.name);
		await swal({
			title: 'Peticion aceptada',
		});
		location.reload(true);
	};
	return (
		<div className="d-flex flex-column justify-content-center">
            <h3>Peticiones Activas</h3>
			<table className="table table-secondary">
				<thead>
					<tr>
						<th>Hospital</th>
						<th>Fecha</th>
						<th>Insumos</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{active
						? active.map((element, index) => {
								return (
									<tr key={index}>
										<td>{element.hospital.name}</td>
										<td>{element.date.split('T')[0]}</td>
										<td>
											<p className="m-0">{`${element.insumos[0].insumos.nombre}: ${element.insumos[0].cantidad}`}</p>
											<p className="m-0">{`${element.insumos[1].insumos.nombre}: ${element.insumos[1].cantidad}`}</p>
											<p className="m-0">{`${element.insumos[2].insumos.nombre}: ${element.insumos[2].cantidad}`}</p>
										</td>
										<td>
											<button
												type="button"
												onClick={acceptHandler}
												name={element.id}
												className="btn btn-success"
											>
												Aceptar
											</button>
										</td>
									</tr>
								);
						  })
						: null}
				</tbody>
			</table>
		</div>
	);
}
