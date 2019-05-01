import React from 'react';
import PropTypes from 'prop-types';

export class Home extends React.Component {
	constructor(props){
		super();
		this.state = {
			age : props.initialAge,
			status : 0
		}
	}
	onMakeOlder (){
		this.setState({
			age:this.state.age + 3 
		});
	}
	render (){
		return (
			<div>
			<p>In new Component</p>
			<p>Hello {this.props.name} </p>
			<p>Your age is {this.state.age}</p>
			<button className="btn btn-primary" onClick={() => this.onMakeOlder()} >Make me older</button>
			</div>
			)
	}


}
Home.propTypes = {
		name : PropTypes.string,
		age : PropTypes.number
}