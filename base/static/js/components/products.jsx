import React from 'react';
import ReactDom from 'react-dom';

export default class Products extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			products: []
		}
	}

	async loadProducts(url) {
		this.setState({
			products: await fetch(url).then(res => res.json()).catch(function(error) {console.log(error)})
		})
	}

	componentDidMount() {
		this.loadProducts('../api/products/')
	}

	render() {

		const imgSize = {
			width : '150px'
		}

		return(
				<div className='products'>
					{this.state.products.map((item, index) => (
						<div className='products__item' key={index}>
							<div>{item.name}</div>
							<div><img style={imgSize} src={item.img_url}/></div>
							<div dangerouslySetInnerHTML={{ __html: item.description }} />
						</div>
					))}
				</div>
			)
	}
}