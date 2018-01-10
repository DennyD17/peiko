import React from 'react';
import ReactDom from 'react-dom';

export default class Home extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			topProducts: []
		}
	}

	async loadTopPtoducts(url) {
		this.setState({
			topProducts: await fetch(url).then(res => res.json())
		})
	}

	componentDidMount() {
		this.loadTopPtoducts('api/products/')
	}

	render() {
		console.log(this.state.topProducts)
		return(
				<div>
					{this.state.topProducts.map((item, index) => (
						<div key={index}>
							{item.name} - {item.description}
						</div>
					))}
				</div>
			)
	}
}