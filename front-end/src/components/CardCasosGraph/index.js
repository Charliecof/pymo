import React, { useEffect, useState } from 'react';
import CasosChart from '../CasosChart';
import { getCasosGraph } from '../../utils/apiRequests';
export default function CardCasosGraph({ year }) {
	const [casos, setCasos] = useState(null);
	useEffect(async () => {
		try {
			const casosGraph = await getCasosGraph(`20${year}`);
            console.log(casosGraph,'casos');
			setCasos([...casosGraph]);
		} catch (error) {
            console.error(error);
        }
	}, []);
	return (
		<div
			className="card  mb-3"
			style={{
				backgroundColor: 'rgba(255, 255, 255, 0.85)',
			}}
		>
			{casos && <CasosChart data={casos} />}
		</div>
	);
}
