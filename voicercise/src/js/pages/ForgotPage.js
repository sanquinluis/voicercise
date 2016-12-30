import React from 'react'
import DocumentTitle from 'react-document-title';
import Header from './Header.js'

export default class ForgotPage extends React.Component{

	render(){
		return(
		<DocumentTitle title={`Forgot Password`}>
			<div>
				<div className="container">
					<div className="well clearfix">
						<h1>Forgot Password</h1>
						<form className="form-horizontal">
								
							<div className="form-group">
								<label htmlFor="signup-email" className="col-sm-2 control-label">Email</label>
								<div className="col-sm-10">
								<input type="text" name="email" id="signup-email" className="form-control" placeholder="Email" />
								</div>
							</div>

							

							<div className="col-sm-offset-2 col-sm-10">
								<input type="submit" className="btn btn-default" value="Reset Password" />
							</div>
							
						</form>
					</div>
					<ul>
						<li><a href="/login">Sign-in</a></li>
						<li><a href="/signup">Sign-up</a></li>
						<li><a href="/">Return to landing page</a></li>
					</ul>
				</div>
			</div>
		</DocumentTitle>
		);
	}
}