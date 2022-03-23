import React from 'react';
import Menu from '../../components/Menu';
import RightColumn from '../../layout/RightColum';
import TabNavigation from '../../components/TabNavigation';
import LineChart from '../../components/LineChart';
import BodegaChart from '../../components/BodegaChart';
export default function Admin() {
	return (
		<div style={{ display: 'flex', position: 'relative', height: '100%' }}>
			<Menu />
			<RightColumn>
				<div className="container-fluid">
					<div className="p-3" style={{ widht: '100%'}}>
						<h2>Inicio</h2>
						<TabNavigation />
					</div>
					<div className="row m-2">
						<div className="col-6">
							<div
								className="card  mb-3"
								style={{
									backgroundColor: 'rgba(255, 255, 255, 0.85)',
								}}
							>
								<div className="card-header text-center m-0">
									<p
										style={{
											color: 'rgba(58, 58, 58, 1)',
											fontSize: '20px',
											margin: '0',
										}}
									>
										Insumos en Bodega
									</p>
								</div>
								<div
									style={{ height: '300px' }}
									className="card-body"
								>
									<BodegaChart />
								</div>
							</div>
						</div>
						<div className="col-6">
						<div
								className="card  mb-3"
								style={{
									backgroundColor: 'rgba(255, 255, 255, 0.85)',
								}}
							>
								<div className="card-header text-center m-0">
									<p
										style={{
											color: 'rgba(58, 58, 58, 1)',
											fontSize: '20px',
											margin: '0',
										}}
									>
										Insumos en Bodega
									</p>
								</div>
								<div
									style={{ height: '300px' }}
									className="card-body"
								>
									<LineChart />
								</div>
							</div>
						</div>
					</div>
				</div>
			</RightColumn>
		</div>
	);
}
