import React from 'react';
import ReactDom from 'react-dom';
import { routes } from 'react-router-dom'

export default class Items extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			location: null,
			data: [],
			requestFailed: false,
			activeData: '',
			activeDescription: '',
			activeImage: '',
		}
	}

	getCategory() {
		let arr = document.location.pathname.split('/');
		this.setState({
			location: arr[2]
		})
	}

	loadProducts(url) {
		fetch(url)
		.then(res => res.json())
		.then( res => this.setState({
			data: res.products
			}), 
			() => {
				this.setState({
					requestFailed: true
				})
		})
		.then(res => this.setState({
			activeData: this.state.data[0].name,
			activeDescription: this.state.data[0].description,
			activeImage: this.state.data[0].image
		}))
	}

	async getData() {
		await this.getCategory();
		this.loadProducts(`/api/categories/${this.state.location}`); 
	}

	componentWillMount() {
		this.getData();
	}

	render() {

		const checkedItem = {color: '#ee1d23', fontWeight: 'bold'}
		console.log(this.state.data)
		return(
				<div className='category'>
					{this.state.requestFailed ? 
						<h1 class="error">
							Ошибка запроса к базе данных
						</h1> 
						: 
						null }
						<div className='category__items'>
							<div className='category__header'>Каталог</div>
							<ul>
								{this.state.data.map((item, index) => (
									<li key={index}
										style={this.state.activeData == item.name ? checkedItem : null}
										className='category__list' 
										onClick={() => this.setState({
											activeData: item.name,
											activeDescription: item.description,
											activeImage: item.image
									})}>
										{item.name}
									</li>
									))}
							</ul>
						</div>
						<div className='category__description'>
							<div className="category__name">{this.state.activeData}</div>
							<div className='category__img'><img src={this.state.activeImage} /></div>
							<div className='category__text'>{this.state.activeDescription}</div>
						</div>
				</div>
			)
	}
}