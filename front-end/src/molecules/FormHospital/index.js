import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { hospitalSchema } from '../../utils/hospitalSchema';
import { addHospital } from '../../utils/apiRequests';
import swal from 'sweetalert';

export default function FormHospital() {
	const initialValues = {
		name: '',
	};

	const handleSubmit = async (values)=>{
		try {
			await addHospital({name:values.name});
			await swal({
				title:"Hospital enviada"
			});
			window.location.replace('/admin');
			
		} catch (error) {
			console.error(error);
		}
	}
	return (
		<Formik
			initialValues={initialValues}
			validationSchema={hospitalSchema}
			onSubmit={handleSubmit}
		>
			<Form>
				<div className="form-group">
					<label className="form-label">Nombre: </label>
					<Field
						className="form-control"
						type="text"
						name="name"
						placeholder="Nombre"
					/>
					<ErrorMessage name="name">
						{(errorMessage) => (
							<p className="text-danger">{errorMessage}</p>
						)}
					</ErrorMessage>
				</div>

				<div className="text-end">
					<button className="btn mt-2" type="submit">
						Agregar
					</button>
				</div>
			</Form>
		</Formik>
	);
}
