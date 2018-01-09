import React from 'react';
import ReactDom from 'react-dom';

export default class Menu extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
				<div>
					<div className='menu__info' onClick={() => this.props.switch('about')}>
						О компании
					</div>
					<div className='menu__items' onClick={() => this.props.switch('products')}>
						Продукция
					</div>
					<div className='menu__contacts' onClick={() => this.props.switch('contacts')}>
						Контакты
					</div>
				</div>
			)
	}
}