import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = ({
	onSubmit,
	onChange,
	errors,
	user
}) => (
	<Card className = "container">
		<form action = "/" onSubmit = {onSubmit}>
			<h2 className = "card-heading">Login</h2>

			{errors.summary && <p className = "error-message">{errors.summary}</p>}

			<div className = "field-line">
				<TextField
					floatingLabelText = "Email"
					name = "email"
					errorText = {errors.email}
					onChange = {onChange}
					value = {user.email}
				/>
			</div>

			<div className = "field-line">
				<TextField
					floatingLabelText = "Password"
					type = "password"
					name = "password"
					onChange = {onChange}
					errorText = {errors.password}
					value = {user.password}
				/>
			</div>
		</form>
	</Card>
);