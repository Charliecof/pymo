import React, { useEffect, useState } from 'react';
import { getPaquetesGraph, getHospitals } from '../../utils/apiRequests';
import LineChart from '../LineChart';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function CardPaquetesGraph({year}) {
	const [position, setPosition] = useState(0);
	const [data, setData] = useState([]);
	const [hospitals, setHospitlas] = useState([]);
	useEffect(async () => {
		try {
			const hospitalList = await getHospitals();
			setHospitlas([...hospitalList]);
			const aux = await getPaquetesGraph(hospitalList[position].id,`20${year}`);
			console.log(aux,'aux');
			setData([...aux]);
		} catch (error) {
			console.error(error);
		}
	}, [year]);

	const handleNext = async () => {
		if (position < hospitals.length - 1) {
			try {
				const acum = position + 1;
				setPosition(acum);
				const aux = await getPaquetesGraph(hospitals[acum].id,`20${year}`);
				setData([...aux]);
			} catch (error) {
				console.error(error);
			}
		}
	};

	const handlePrev = async () => {
		if (position != 0) {
			try {
				const acum = position - 1;
				setPosition(acum);
				const aux = await getPaquetesGraph(hospitals[acum].id,`20${year}`);
				setData([...aux]);
			} catch (error) {
				console.error(error);
			}
		}
	};
	return (
		<div
			className="card  mb-3"
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.85)',
			}}
		>
			<div className="card-header text-center m-0 d-flex justify-content-between">
				<button onClick={handlePrev} className="btn btn-info ">
					<GrFormPrevious />
				</button>
				<div className="d-flex flex-column">
					<p
						style={{
							color: 'rgba(58, 58, 58, 1)',
							fontSize: '20px',
							margin: '0',
						}}
					>
						Insumos Entregados
					</p>
					<p
						style={{
							color: 'rgba(58, 58, 58, 1)',
							fontSize: '20px',
							margin: '0',
						}}
					>
						{hospitals.length > 0
							? `${hospitals[position].name} `
							: null}
					</p>
				</div>
				<button onClick={handleNext} className="btn btn-info ">
					<GrFormNext />
				</button>
			</div>
			<div style={{ height: '300px' }} className="card-body">
				<LineChart data={data} />
			</div>
		</div>
	);
}
