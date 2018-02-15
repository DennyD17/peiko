import React from 'react';
import ReactDom from 'react-dom';
import { Link } from 'react-router-dom'

export default class Categories extends React.Component{
	
	constructor(props){
		super(props);

		this.state = {
			categories: [],
			requestFailed: false,
			showProducts: false,
			products: null,
		}
	}

	async loadProducts(url) {
		await fetch(url)
		.then(res => res.json())
		.then( res => {
			this.setState({
				categories: res
			})
		}, () => {
			this.setState({
				requestFailed: true
			})
		})
	}

// делать апи запрос к  /api/categories/ для получения всех категорий и данных
	componentDidMount() {
		this.loadProducts('../api/categories/');
	}

	render() {

		const imgSize = {
			width : '170px',
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
					{this.state.categories.map((item, index) => (
						<Link to={`/products/${this.state.categories[index].id}`} key={index} >
							<div 
								className='products__item'
							>
								<div className="item">
									<img style={imgSize} src={item.img_url}/>
								</div>
								<div className="item__name borderTop">
									{item.name}
								</div>
							</div>
						</Link>
					))}
				</div>
			)
	}
}