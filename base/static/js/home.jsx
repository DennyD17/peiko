import React from 'react';
import ReactDom from 'react-dom';

export default class Home extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			topProducts: []
		}
	}

	async loadTopProducts(url) {
		this.setState({
			topProducts: await fetch(url).then(res => res.json())
		})
	}

	componentDidMount() {
		this.loadTopProducts('api/products/top_viewed/')
	}

	render() {

		const imgSize = {
			width : '150px'
		}

		return(
				<div className='products'>
					{this.state.topProducts.map((item, index) => (
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