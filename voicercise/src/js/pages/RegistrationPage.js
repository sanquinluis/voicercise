import React from 'react';
import DocumentTitle from 'react-document-title';
import { RegistrationForm } from 'react-stormpath';

export default class RegistrationPage extends React.Component {
	render() {
		return (
			<DocumentTitle title={`Registration`}>
			 {/*<div className='container'>
			  <div className='row'>
			   <div className='col-xs-12'>
			    <h3>Registration</h3>
			    <hr />
			   </div>
			  </div>
			  <RegistrationForm />
			 </div>*/}
			 <div className="container">
	<div className="well clearfix">
		<h1>Sign up</h1>
		<form className="form-horizontal">
				
			<div className="form-group">
				<label htmlFor="signup-name" className="col-sm-2 control-label">Name</label>
				<div className="col-sm-10">
					<input type="text" name="=name" id="signup-name" className="form-control" placeholder="Name" />
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="signup-username" className="col-sm-2 control-label">Username</label>
				<div className="col-sm-10">
				<input type="text" name="username" id="signup-username" className="form-control" placeholder="Username" />
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="signup-email" className="col-sm-2 control-label">Email</label>
				<div className="col-sm-10">
				<input type="text" name="email" id="signup-email" className="form-control" placeholder="Email" />
				</div>
			</div>

			<div className="form-group">
				<label htmlFor="signup-password" className="col-sm-2 control-label">Password</label>
				<div className="col-sm-10">
				<input type="text" name="password" id="signup-password" className="form-control" placeholder="Password" />
				</div>
			</div>

			<div className="col-sm-offset-2 col-sm-10">
				<input type="submit" className="btn btn-default" value="Sign-Up" />
			</div>
			
		</form>
	</div>
	<ul>
		<li><a href='/login'>Sign-in</a></li>
		<li><a>Forgot Password</a></li>
		<li><a href="/">Return to landing page</a></li>
	</ul>
</div>
			</DocumentTitle>
		);
	}
}