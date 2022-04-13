import React from 'react';
import { ResponsiveBar } from '@nivo/bar';

export default function CasosChart({ data }) {
	return (
		<div style={{ height: '100%', color: 'black' }}>
			<ResponsiveBar
				data={data}
				margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                keys={['cantidad']}
                indexBy="mes"
                colors={{ scheme: 'nivo' }}
			/>
		</div>
	);
}
