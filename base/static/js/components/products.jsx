import React from 'react';
import ReactDom from 'react-dom';

export default class Products extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			products: [],
			requestFailed: false
		}
	}

	async loadProducts(url) {
		await fetch(url)
		.then(res => res.json())
		.then( res => {
			this.setState({
				products: res
			})
		}, () => {
			this.setState({
				requestFailed: true
			})
		})
	}

	componentDidMount() {
		this.loadProducts('../api/products/')
	}

	render() {
		console.log('request is failed: ' + this.state.requestFailed)
		const imgSize = {
			width : '150px',
			borderRadius: '20px'
		}

		return(
				<div className='products'>
					{this.state.requestFailed ? 
						<h1 class="error">
							Ошибка запроса к базе данных
						</h1> 
						: 
						null }
					{this.state.products.map((item, index) => (
						<div className='products__item' key={index}>
							<div>
								{item.name}
							</div>
							<div className="item">
								<img style={imgSize} src={item.img_url}/>
							</div>
							<div className="borderTop" dangerouslySetInnerHTML={{ __html: item.description }} />
						</div>
					))}
				</div>
			)
	}
}