import React from 'react';
import ReactDom from 'react-dom';

export default class Products extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			topProducts: []
		}
	}

	componentDidMount() {
		fetch('api/top-products')
		.then(res => res.json())
		.then(res => {
			for (let i = 0; i < res.length ; i++ ) {
					let products = [];
					products.push(res[i]);
					this.setState({
						topProducts: products
					})
				}
		})
		.catch( error => console.log(error))	
	}

	render() {
		console.log(this.state.topProducts)
		let productsTemplate;
		productsTemplate = this.state.topProducts.map((item, key) => {
			return (
					<div key={item.id}>
						{item.name}
					</div>
				)
		}

			)
		return(
				<div>
					{productsTemplate}
				</div>
			)
	}
}