import React from 'react'
import DocumentTitle from 'react-document-title';
import Header from './Header.js'
import { Link } from 'react-router';
import { ResetPasswordForm } from 'react-stormpath';


export default class ForgotPage extends React.Component{

	render(){
		return(
		<DocumentTitle title={`Forgot Password`}>
			<div>
				<div className="container">
					<div className="well clearfix">
						<h1>Forgot Password</h1>
						<ResetPasswordForm />
						{/*<form className="form-horizontal">
								
							<div className="form-group">
								<label htmlFor="signup-email" className="col-sm-2 control-label">Email</label>
								<div className="col-sm-10">
								<input type="text" name="email" id="signup-email" className="form-control" placeholder="Email" />
								</div>
							</div>

							

							<div className="col-sm-offset-2 col-sm-10">
								<input type="submit" className="btn btn-default" value="Reset Password" />
							</div>
							
						</form>*/}
					</div>
					<ul>
						<li><Link to="/login">Sign-in</Link></li>
						<li><Link to="/register">Sign-up</Link></li>
						<li><Link to="/">Return to landing page</Link></li>
					</ul>
				</div>
			</div>
		</DocumentTitle>
		);
	}
}