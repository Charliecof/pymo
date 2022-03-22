import React, { useEffect, useState } from 'react';
import { ResponsiveBar } from '@nivo/bar';
import { getDataBodega } from '../../utils/apiRequests';
export default function BodegaChart() {
	const [data, setData] = useState([]);
	useEffect(async () => {
		try {
			const res = await getDataBodega();
			console.log(res.data);
			setData([...res.data]);
		} catch (error) {
			console.error(error);
		}
	}, []);
	return (
		<div className='p-1' style={{ height: '90%', color: 'black', backgroundColor:'rgba(200, 200, 200, 0.37)', borderRadius:'4px'}}>
			{data.length > 0 ? (
				<ResponsiveBar
					colors={{ scheme: 'pink_yellowGreen' }}
                    colorBy="indexValue"
					margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
					indexBy="insumo"
					keys={['cantidad']}
					data={data}legends={[
                        {
                            dataFrom: 'indexes',
                            anchor: 'bottom-right',
                            direction: 'column',
                            justify: false,
                            translateX: 120,
                            translateY: 0,
                            itemsSpacing: 2,
                            itemWidth: 100,
                            itemHeight: 20,
                            itemDirection: 'left-to-right',
                            itemOpacity: 0.85,
                            symbolSize: 20,
                            effects: [
                                {
                                    on: 'hover',
                                    style: {
                                        itemOpacity: 1
                                    }
                                }
                            ]
                        }
                    ]}
				/>
			) : null}
		</div>
	);
}
