import React from 'react'
import Header from './Header.js'
import DocumentTitle from 'react-document-title';


//ports in posts from database
class Forum extends React.Component{


	render(){
		return(
			<div>
				
				<table className="table">

					<tbody>
						<tr>
							<th>Topic</th>
							<th>Replies</th>
							<th>Views</th>
							<th>Last Post</th>
						</tr>
					
				
						<tr>
							<td><a href="#">This is a Topic</a></td>
							<td>50</td>
							<td>345225</td>
							<td><p>4 minutes ago</p><p>Nike Adeyemi</p></td>
						</tr>
					</tbody>
				</table>
			</div>
			)
	}
}


export default class ForumPage extends React.Component{
	constructor(props){
		super(props);
		
	}


	render(){

		return(
			<div>
				<Header />
				<h3>Chat</h3>
				<ul>
					<button>Music</button>
					<button>Misc.</button>
				</ul>

				<h3>Option</h3>
				<ul>
					<button>User Panel</button>
					<button>New Topic</button>
				</ul>

				<div>
					<ul>
						<li><a>1</a></li>
					</ul>
				</div>

				<Forum />
			</div>
			)
	}
}