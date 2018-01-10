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
		this.loadTopPtoducts('api/products/top_viewed/')
	}

	render() {
		const imgSize = {
			width : '150px'
		}
		console.log(this.state.topProducts)
		return(
				<div className='products'>
					{this.state.topProducts.map((item, index) => (
						<div className='products__item' key={index}>
							<div>{item.name}</div>
							<div><img style={imgSize} src={item.img_url}/></div>
							<div>{item.description}</div>
						</div>
					))}
				</div>
			)
	}
}