import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export default function LineChart() {
	const data = [
        {
            "id": "Cubrebocas",
            "data": [
                {
                    "x": "2021-01-22",
                    "y": 200
                },
                {
                    "x": "2021-02-22",
                    "y": 400
                },
                {
                    "x": "2021-03-22",
                    "y": 600
                },
                {
                    "x": "2021-04-22",
                    "y": 800
                },
                {
                    "x": "2021-05-22",
                    "y": 1000
                },
                {
                    "x": "2021-06-22",
                    "y": 1000
                },
                {
                    "x": "2021-07-22",
                    "y": 600
                },
                {
                    "x": "2021-08-22",
                    "y": 600
                },
                {
                    "x": "2021-09-22",
                    "y": 600
                },
                {
                    "x": "2022-10-22",
                    "y": 600
                },
                {
                    "x": "2021-11-22",
                    "y": 600
                },
                {
                    "x": "2021-12-22",
                    "y": 600
                }
            ]
        },
        {
            "id": "Caretas",
            "data": [
                {
                    "x": "2021-01-22",
                    "y": 200
                },
                {
                    "x": "2021-02-22",
                    "y": 400
                },
                {
                    "x": "2021-03-22",
                    "y": 600
                },
                {
                    "x": "2021-04-22",
                    "y": 800
                },
                {
                    "x": "2021-05-22",
                    "y": 1000
                },
                {
                    "x": "2021-06-22",
                    "y": 1000
                },
                {
                    "x": "2021-07-22",
                    "y": 600
                },
                {
                    "x": "2021-08-22",
                    "y": 600
                },
                {
                    "x": "2021-09-22",
                    "y": 600
                },
                {
                    "x": "2022-10-22",
                    "y": 600
                },
                {
                    "x": "2021-11-22",
                    "y": 600
                },
                {
                    "x": "2021-12-22",
                    "y": 600
                }
            ]
        },
        {
            "id": "Lentes",
            "data": [
                {
                    "x": "2021-01-22",
                    "y": 200
                },
                {
                    "x": "2021-02-22",
                    "y": 400
                },
                {
                    "x": "2021-03-22",
                    "y": 600
                },
                {
                    "x": "2021-04-22",
                    "y": 800
                },
                {
                    "x": "2021-05-22",
                    "y": 1000
                },
                {
                    "x": "2021-06-22",
                    "y": 1000
                },
                {
                    "x": "2021-07-22",
                    "y": 600
                },
                {
                    "x": "2021-08-22",
                    "y": 600
                },
                {
                    "x": "2021-09-22",
                    "y": 600
                },
                {
                    "x": "2022-10-22",
                    "y": 600
                },
                {
                    "x": "2021-11-22",
                    "y": 600
                },
                {
                    "x": "2021-12-22",
                    "y": 600
                }
            ]
        }
    ];
	return (
		<div style={{height:'100%',color:'black'}}>
			<ResponsiveLine
				data={data}
				margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
				xScale={{ type: 'point' }}
				yScale={{
					type: 'linear',
					min: 'auto',
					max: 'auto',
					stacked: false,
					reverse: false,
				}}
				yFormat=" >-.3f"
				axisTop={null}
				axisRight={null}
				axisBottom={{
					orient: 'bottom',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Meses',
					legendOffset: 40,
					legendPosition: 'middle',
				}}
				axisLeft={{
					orient: 'left',
					tickSize: 5,
					tickPadding: 5,
					tickRotation: 0,
					legend: 'Insumos',
					legendOffset: -40,
					legendPosition: 'middle',
				}}
				pointSize={10}
				pointColor={{ theme: 'background' }}
				pointBorderWidth={2}
				pointBorderColor={{ from: 'serieColor' }}
				pointLabelYOffset={-12}
				useMesh={true}
				legends={[
					{
						anchor: 'bottom-right',
						direction: 'column',
						justify: false,
						translateX: 100,
						translateY: 0,
						itemsSpacing: 0,
						itemDirection: 'left-to-right',
						itemWidth: 80,
						itemHeight: 20,
						itemOpacity: 0.75,
						symbolSize: 12,
						symbolShape: 'circle',
						symbolBorderColor: 'rgba(0, 0, 0, .5)',
						effects: [
							{
								on: 'hover',
								style: {
									itemBackground: 'rgba(0, 0, 0, .03)',
									itemOpacity: 1,
								},
							},
						],
					},
				]}
			/>
		</div>
	);
}
