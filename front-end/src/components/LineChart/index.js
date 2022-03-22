import React from 'react';
import { ResponsiveLine } from '@nivo/line';

export default function LineChart(
	{
		/* data */
	}
) {
	const data = [
		{
			id: 'japan',
			color: 'hsl(51, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 33,
				},
				{
					x: 'helicopter',
					y: 205,
				},
				{
					x: 'boat',
					y: 221,
				},
				{
					x: 'train',
					y: 220,
				},
				{
					x: 'subway',
					y: 47,
				},
				{
					x: 'bus',
					y: 2,
				},
				{
					x: 'car',
					y: 264,
				},
				{
					x: 'moto',
					y: 165,
				},
				{
					x: 'bicycle',
					y: 65,
				},
				{
					x: 'horse',
					y: 4,
				},
				{
					x: 'skateboard',
					y: 289,
				},
				{
					x: 'others',
					y: 187,
				},
			],
		},
		{
			id: 'france',
			color: 'hsl(27, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 5,
				},
				{
					x: 'helicopter',
					y: 277,
				},
				{
					x: 'boat',
					y: 292,
				},
				{
					x: 'train',
					y: 278,
				},
				{
					x: 'subway',
					y: 172,
				},
				{
					x: 'bus',
					y: 201,
				},
				{
					x: 'car',
					y: 109,
				},
				{
					x: 'moto',
					y: 203,
				},
				{
					x: 'bicycle',
					y: 257,
				},
				{
					x: 'horse',
					y: 5,
				},
				{
					x: 'skateboard',
					y: 115,
				},
				{
					x: 'others',
					y: 281,
				},
			],
		},
		{
			id: 'us',
			color: 'hsl(44, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 86,
				},
				{
					x: 'helicopter',
					y: 206,
				},
				{
					x: 'boat',
					y: 209,
				},
				{
					x: 'train',
					y: 279,
				},
				{
					x: 'subway',
					y: 3,
				},
				{
					x: 'bus',
					y: 131,
				},
				{
					x: 'car',
					y: 24,
				},
				{
					x: 'moto',
					y: 254,
				},
				{
					x: 'bicycle',
					y: 82,
				},
				{
					x: 'horse',
					y: 226,
				},
				{
					x: 'skateboard',
					y: 149,
				},
				{
					x: 'others',
					y: 209,
				},
			],
		},
		{
			id: 'germany',
			color: 'hsl(340, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 65,
				},
				{
					x: 'helicopter',
					y: 107,
				},
				{
					x: 'boat',
					y: 261,
				},
				{
					x: 'train',
					y: 227,
				},
				{
					x: 'subway',
					y: 198,
				},
				{
					x: 'bus',
					y: 133,
				},
				{
					x: 'car',
					y: 282,
				},
				{
					x: 'moto',
					y: 264,
				},
				{
					x: 'bicycle',
					y: 90,
				},
				{
					x: 'horse',
					y: 132,
				},
				{
					x: 'skateboard',
					y: 111,
				},
				{
					x: 'others',
					y: 67,
				},
			],
		},
		{
			id: 'norway',
			color: 'hsl(87, 70%, 50%)',
			data: [
				{
					x: 'plane',
					y: 221,
				},
				{
					x: 'helicopter',
					y: 125,
				},
				{
					x: 'boat',
					y: 293,
				},
				{
					x: 'train',
					y: 153,
				},
				{
					x: 'subway',
					y: 71,
				},
				{
					x: 'bus',
					y: 0,
				},
				{
					x: 'car',
					y: 291,
				},
				{
					x: 'moto',
					y: 215,
				},
				{
					x: 'bicycle',
					y: 183,
				},
				{
					x: 'horse',
					y: 96,
				},
				{
					x: 'skateboard',
					y: 40,
				},
				{
					x: 'others',
					y: 218,
				},
			],
		},
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
					stacked: true,
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
					legend: 'Casos',
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
