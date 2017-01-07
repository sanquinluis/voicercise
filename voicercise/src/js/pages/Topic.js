import React from 'react'
import Header from './Header.js'
import DocumentTitle from 'react-document-title';

export default class Topic extends React.Component{
	render(){
		return(
			<div>
				<Header />
				<table>
					<tbody>
						<tr>
							<td><p>Nike Adenike</p><img src="http://placehold.it/64x64" alt="image" className="img-circle" /></td>
							<td>
								<div>This is a post</div>
								<p>Posted 35 minutes ago</p>
								<button>Quote</button>
								<button>Edit</button>
							</td>
						</tr>

						<tr>
							<td><p>Nike Adenike</p><img src="http://placehold.it/64x64" alt="image" className="img-circle" /></td>
							<td>
								<div>This is a second post</div>
								<p>Posted 3 minutes ago</p>
								<button>Quote</button>
								<button>Edit</button>

							</td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
} 