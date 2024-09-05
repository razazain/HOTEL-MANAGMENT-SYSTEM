import React from 'react';
import Header from '../Components/Header';
import Sidebar from '../Components/Sidebar';

const Dashboard = () => {
	return (
		<div>
			<Header />
			<Sidebar />

			<div className="page-wrapper">
				<div className="content container-fluid">
					<div className="page-header">
						<div className="row">
							<div className="col-sm-12 mt-5">
								<h3 className="page-title mt-3">Welcome To LuxuryStay Hospitality</h3>
								<ul className="breadcrumb">
									<li className="breadcrumb-item active">Admin Dashboard</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card board1 fill">
								<div className="card-body">
									<div className="dash-widget-header">
										<div>
											<h3 className="card_widget_header">236</h3>
											<h6 className="text-muted">Total Booking</h6>
										</div>
										<div className="ml-auto mt-md-3 mt-lg-0">
											<span className="opacity-7 text-muted">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#009688"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-user-plus"
												>
													<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
													<circle cx="8.5" cy="7" r="4"></circle>
													<line x1="20" y1="8" x2="20" y2="14"></line>
													<line x1="23" y1="11" x2="17" y2="11"></line>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-3 col-sm-6 col-12">
							<div className="card board1 fill">
								<div className="card-body">
									<div className="dash-widget-header">
										<div>
											<h3 className="card_widget_header">180</h3>
											<h6 className="text-muted">Total Rooms</h6>
										</div>
										<div className="ml-auto mt-md-3 mt-lg-0">
											<span className="opacity-7 text-muted">
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="24"
													height="24"
													viewBox="0 0 24 24"
													fill="none"
													stroke="#009688"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
													className="feather feather-dollar-sign"
												>
													<line x1="12" y1="1" x2="12" y2="23"></line>
													<path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
												</svg>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="row">
						<div className="col-md-12 d-flex">
							<div className="card card-table flex-fill">
								<div className="card-header">
									<h4 className="card-title float-left mt-2">Booking</h4>
									<button type="button" className="btn btn-primary float-right veiwbutton">
										View All
									</button>
								</div>
								<div className="card-body">
									<div className="table-responsive">
										<table className="table table-hover table-center">
											<thead>
												<tr>
													<th>Booking ID</th>
													<th>Name</th>
													<th>Email ID</th>
													<th>Aadhar Number</th>
													<th className="text-center">Room Type</th>
													<th className="text-right">Number</th>
													<th className="text-center">Status</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td className="text-nowrap">
														<div>BKG-0001</div>
													</td>
													<td className="text-nowrap">HELLO Bernal</td>
													<td>dkfjal@gmail.com</td>
													<td>12414786454545</td>
													<td className="text-center">Double</td>
													<td className="text-right">
														<div>631-254-6480</div>
													</td>
													<td className="text-center">
														<span className="badge badge-pill bg-success inv-badge">INACTIVE</span>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}

export default Dashboard;
