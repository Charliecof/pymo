import React, { useEffect, useState } from 'react';
import { getPeticionesGraph, getHospitals } from '../../utils/apiRequests';
import LineChart from '../LineChart';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';

export default function CardGraph() {
	const [position, setPosition] = useState(0);
	const [data, setData] = useState([]);
	const [hospitals, setHospitlas] = useState([]);
	useEffect(async () => {
		try {
			const hospitalList = await getHospitals();
			setHospitlas([...hospitalList]);
			const aux = await getPeticionesGraph(hospitalList[0].id);
			setData([...aux]);
		} catch (error) {
			console.error(error);
		}
	}, []);

	const handleNext = async () => {
		if (position < hospitals.length - 1) {
			try {
				const acum = position + 1;
				setPosition(acum);
				const aux = await getPeticionesGraph(hospitals[acum].id);
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
				const aux = await getPeticionesGraph(hospitals[acum].id);
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
						Insumos Pedidos
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
