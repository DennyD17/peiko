import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom'

export default class Menu extends React.Component{
	constructor(props) {
		super(props);
	}

	render() {
		return(
				<div className='menu_pading'>
					<div className='menu__info'>
						<NavLink to='/about' activeClassName="selected">О компании</NavLink>
					</div>
					<div className='menu__items'>
						<NavLink to='/products' activeClassName="selected">Продукция</NavLink>
					</div>
					<div className='menu__contacts'>
						<NavLink to='/contacts' activeClassName="selected">Контакты</NavLink>
					</div>
				</div>
			)
	}
}