import React from 'react';
import { Link } from 'react-router';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';

export default class LoginPage extends React.Component {
	render() {
		return (
			<DocumentTitle title={`Login`}>

			 	<div className="container">
					<div className="well clearfix box">
						<h1>Sign in</h1>
						<div className="vertical-center">
							<LoginForm />
							{/*
							<form className="form-horizontal">
								<div className="form-group">
									<label htmlFor="signin-email" className="col-sm-2 control-label">Email</label>
									<div className="col-sm-10">
									<input type="text" name="email" id="signin-email" className="form-control" placeholder="Email" />
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="signin-password" className="col-sm-2 control-label">Password</label>
									<div className="col-sm-10">
										<input type="password" name="password" id="signin-password" className="form-control" placeholder="Password" />
									</div>
								</div>

								<div className="form-group">
									<div className="col-sm-offset-2 col-sm-10">
										<div className="checkbox">
										<label>
											<input type="checkbox"/> Remember Me
										</label>
										</div>
									</div>
								</div>

								<div className="col-sm-offset-2 col-sm-10">
									<input type="submit" className="btn btn-default" value="Sign-In" />
								</div>
							</form>*/}

						</div>
					</div>

					<ul>
						<li><Link to="/register">Sign-up</Link></li>
						{/*<li><Link to="/forgot">Forgot Password</Link></li>*/}
						<li><Link to="/landing">Return to landing page</Link></li>
					</ul>
				</div>
			</DocumentTitle>
		);
	}
}