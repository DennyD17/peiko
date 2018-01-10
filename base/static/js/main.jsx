import React from 'react';
import ReactDom from 'react-dom';
import styles from '../css/style.css';

import Menu from './menu'
import Products from './products'
import About from './about'
import Contacts from './contacts'

export default class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activePage: 'about',
		}

		this.setActivePage = this.setActivePage.bind(this);
	}

	setActivePage(name) {
		this.setState({
			activePage: name
		});
	};

	render() {
	
		return (
			<div className='body'>
				<div className='head'>
					<div className='head__logo'></div>
				    <div className='head__callback'>
				      <p className='callback__text'>
				        Заказать звонок
				      </p>
				    </div>
				</div>
				<div className='menu'>
					<Menu
						switch={this.setActivePage}
					/>
				</div>
				<div className='content'>
					{this.state.activePage == 'products' ? <Products /> : null}
					{this.state.activePage == 'about' ? <About /> : null}
					{this.state.activePage == 'contacts' ? <Contacts /> : null }
				</div>
				<div className='footer'>
					<div className='footer__contacts'>
						<div className='contacts__info'>8 (495) 405-01-35</div>
						<div className='marginBottom'>INFO@PEIKO.RU</div>
						<div className='contacts__text'>Наро-Фоминский район, пос. Селятино,
						ул. Вокзальная, дом 2</div>
					</div>
					<div className='footer__message'>
						<div className='message__text'>Напишите нам</div>
						<div className='message__rights'>
							<p>Все права защищены ©  2009–2018 г. <br/>
							Компания «ПЭКО»</p>
						</div>
					</div>
				</div>
			</div>
			)
	}
}