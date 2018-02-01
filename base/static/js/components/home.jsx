import React from 'react';
import ReactDom from 'react-dom';

export default class Home extends React.Component{

	constructor(props){
		super(props);

		this.state = {
			topProducts: [],
			requestFailed: false
		}
	}

	async loadTopProducts(url) {
		await fetch(url)
		.then(res => res.json())
		.then( res => {
			this.setState({
				topProducts: res
			})
		}, () => {
			this.setState({
				requestFailed: true
			})
		})
	}

	componentDidMount() {
		this.loadTopProducts('api/products/top_viewed/')
	}

	render() {

		const imgSize = {
			width : '150px',
			borderRadius: '20px'
		}

		return(
				<div className='products'>
					{this.state.requestFailed ? 
						<h1 className="error">
						Ошибка запроса к базе данных
						</h1> 
						: 
						null }
					{this.state.topProducts.map((item, index) => (
						<div className='products__item' key={index}>
							<div>
								{item.name}
							</div>
							<div className="item">
								<img style={imgSize} src={item.img_url}/>
							</div>
							<div dangerouslySetInnerHTML={{ __html: item.description }} />
						</div>
					))}
				</div>
			)
	}
}