import React from 'react';
import { Container, Row, Table } from 'react-bootstrap';
import DashCard from '../../lib/components/DashCard';
import DashRefCard from '../../lib/components/DashRefCard';

export default function DashboardMain() {
	return (
		<>
			<Container className='pt-5'>
				<Row className='mt-3 mb-4 g-3'>
					<DashCard
						cardIcon={'add'}
						cardValue={'120,500'}
						cardLabel={'Total'}
						iconFcolor={'yellow'}
					/>
					<DashCard
						cardIcon={'finance'}
						cardValue={'70,000'}
						cardLabel={'Withdrawn'}
						iconFcolor={'red'}
					/>
					<DashCard
						cardIcon={'add'}
						cardValue={'50,500'}
						cardLabel={'Balance'}
						iconFcolor={'green'}
					/>
					<DashCard
						cardIcon={'add'}
						cardValue={'0'}
						cardLabel={'Pending'}
						iconFcolor={'cyan'}
					/>
				</Row>
				<Row className='mb-3 g-3'>
					<DashRefCard
						cardIcon={'add'}
						cardValue={'THBFT22'}
						cardLabel={'Referral Code'}
					/>
					<DashRefCard
						cardIcon={'add'}
						cardValue={'200'}
						cardLabel={'Total Referrals'}
					/>
					<DashRefCard
						cardIcon={'add'}
						cardValue={'155'}
						cardLabel={'Completed Referrals'}
					/>
					<DashRefCard
						cardIcon={'add'}
						cardValue={'45'}
						cardLabel={'Pending Referrals'}
					/>
				</Row>
				<Row>
					<Table
						responsive={'sm'}
						striped
						bordered
						hover
						variant='primary'
					>
						<thead>
							<tr>
								<th>Name</th>
								<th>Status</th>
								<th>Level</th>
								<th>%</th>
								<th>N</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>First Referral Name</td>
								<td>Pending</td>
								<td>Level 1</td>
								<td>50%</td>
								<td>1000</td>
							</tr>
							<tr>
								<td>Second Referral Name</td>
								<td>Success</td>
								<td>Level 2</td>
								<td>20%</td>
								<td>400</td>
							</tr>
							<tr>
								<td>Third Referral Name</td>
								<td>Pending</td>
								<td>Level 3</td>
								<td>10%</td>
								<td>200</td>
							</tr>
						</tbody>
					</Table>
				</Row>
			</Container>
		</>
	);
}
