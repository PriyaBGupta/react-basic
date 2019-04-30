import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
	render (){
		console.log("Props"+this.props);
		return (
			<div>
			<p>In new Component</p>
			<p>Hello {this.props.name} </p>
			<p>Your age is {this.props.age}</p>
			<p>Your hobbies are</p>
			<ul>{this.props.user.hobbies.map((hobby,i) => <li key={i}>{hobby}</li>)}</ul>
			<p>{this.props.children}</p>
			</div>
			)
	}


}
Home.propTypes = {
		name : PropTypes.string,
		age : PropTypes.number,
		user : PropTypes.object,
		children : PropTypes.element.isRequired
}