import React from 'react';
import ReactDom from 'react-dom';

export default class Menu extends React.Component{
	constructor(props) {
		super(props);
	}

	setActivePage() {}

	render() {
		return(
				<div>
					<div className='menu__info'>
						О компании
					</div>
					<div className='menu__items'>
						Продукция
					</div>
					<div className='menu__contacts'>
						Контакты
					</div>
				</div>
			)
	}
}