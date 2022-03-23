import React from 'react';
import Menu from '../../components/Menu';
import RightColumn from '../../layout/RightColum';
import TabNavigation from '../../components/TabNavigation';
import BodegaChart from '../../components/BodegaChart';
import CardGraph from '../../components/CardGraph';
import TablePeticiones from '../../components/TablePeticiones';
import CardPaquetesGraph from '../../components/CardPaquetesGraph';

export default function Admin() {
	return (
		<div style={{ display: 'flex', position: 'relative', height: '100%' }}>
			<Menu />
			<RightColumn>
				<div
					style={{
						overflowY: 'scroll',
						height: '100%',
						scrollbarWidth: 'none',
					}}
					className="container-fluid"
				>
					<div className="p-3" style={{ widht: '100%' }}>
						<h2>Inicio</h2>
						<TabNavigation />
					</div>
					<div className="row m-2">
						<div className="col-6">
							<div
								className="card  mb-3"
								style={{
									backgroundColor:
										'rgba(255, 255, 255, 0.85)',
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
							<CardGraph />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<CardPaquetesGraph />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<div className="p-3">
								<TablePeticiones />
							</div>
						</div>
					</div>
				</div>
			</RightColumn>
		</div>
	);
}
