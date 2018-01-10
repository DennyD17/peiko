import React from 'react';
import ReactDom from 'react-dom';

export default class Products extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			Products: []
		}
	}

	componentDidMount() {

	}

	render() {
		console.log(this.state.topProducts)
		return(
				<div>
					продукты
				</div>
			)
	}
}