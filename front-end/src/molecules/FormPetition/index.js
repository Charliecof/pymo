import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { petitionSchema } from '../../utils/petitionSchema';
import {
	getHospitals,
	getInsumos,
	postPeticion,
} from '../../utils/apiRequests.js';
import swal from 'sweetalert';
export default function FormPetition() {
	const [hospitales, setHospitals] = useState([]);
	const [insumos, setInsumos] = useState([]);
	const [postInsum, setPost] = useState([]);
	let initialValues = {
		hospital: '',
		casos: '',
		mes: '',
	};
	useEffect(() => {
		getHospitals()
			.then((res) => setHospitals([...res]))
			.catch((error) => console.error(error));
		getInsumos()
			.then((res) => {
				setInsumos([...res]);
				const post = res.map((element) => {
					return {
						id_insumo: element.id,
						name: element.nombre_clave,
						cantidad: null,
					};
				});
				setPost([...post]);
			})
			.catch((error) => console.error(error));
	}, []);

	const handleSubmit = async (values) => {
		const insumosAux = postInsum.map((insum) => {
			delete insum.name;
			return insum;
		});
		const postData = {
			hospital: parseInt(values.hospital),
			insumos: [...insumosAux],
			casos: {
				id_hospital: parseInt(values.hospital),
				cantidad: parseInt(values.casos),
				mes: values.mes,
			},
		};
		try {
			await postPeticion(postData);
			swal({
				title: 'Solicitud enviada',
			});
		} catch (error) {
			console.error(error);
		}
	};

	const handleChange = (e) => {
		let aux = postInsum;
		let aux2 = aux.find((a) => a.name === e.target.name);
		let index = aux.indexOf(aux2);
		aux[index].cantidad = parseInt(e.target.value);
		setPost([...aux]);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={petitionSchema}
			onSubmit={handleSubmit}
		>
			<Form>
				<div className="form-group">
					<label className="form-label">Hospital: </label>
					<Field
						className="form-select"
						style={{
							border: '1px solid #636363',
							color: '#636363',
						}}
						name="hospital"
						as="select"
						placeholder="Hospital"
					>
						<option value="">---</option>
						{hospitales.map((hospital, index) => {
							return (
								<option key={index} value={hospital.id}>
									{hospital.name}
								</option>
							);
						})}
					</Field>
					<ErrorMessage name="hospital">
						{(errorMessage) => (
							<p className="text-danger">{errorMessage}</p>
						)}
					</ErrorMessage>
					<div className="text-end">
						<a style={{color:"blue"}} href="/hospitalForm">Agregar Hospital</a>
					</div>
				</div>
				<div className="row">
					<div className="col-6">
						<div className="form-group">
							<label>Numero de Casos:</label>
							<Field
								name="casos"
								className="form-control"
								style={{
									border: '1px solid #636363',
									color: '#636363',
								}}
								type="number"
								placeholder="Casos"
							/>
							<ErrorMessage name="casos">
								{(errorMessage) => (
									<p className="text-danger">
										{errorMessage}
									</p>
								)}
							</ErrorMessage>
						</div>
					</div>

					<div className="col-6">
						<div className="form-group">
							<label>Mes:</label>
							<Field
								name="mes"
								className="form-control"
								style={{
									border: '1px solid #636363',
									color: '#636363',
								}}
								type="month"
								placeholder="Mes"
							/>
							<ErrorMessage name="mes">
								{(errorMessage) => (
									<p className="text-danger">
										{errorMessage}
									</p>
								)}
							</ErrorMessage>
						</div>
					</div>
				</div>

				{insumos.map((insumo, index) => {
					return (
						<div key={index} className="form-group">
							<label>{insumo.nombre}</label>
							<Field
								name={insumo.nombre_clave}
								className="form-control"
								style={{
									border: '1px solid #636363',
									color: '#636363',
								}}
								onChange={handleChange}
								type="number"
								placeholder={insumo.nombre}
							/>
						</div>
					);
				})}

				<div className="mt-2 text-end">
					<button className="btn" type="submit">
						Siguiente
					</button>
				</div>
			</Form>
		</Formik>
	);
}
