import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom'
import styles from '../../css/style.css';

import Menu from './menu'

export default class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			modalwindow: false
		}
	}

	render() {
		
		const modalHidden = {
			display: 'none'
		}

		const modalShown = {
			display: 'block'
		}

		console.log(this.state.modalwindow)
		return (
			<div className='body'>
				<div className='head'>
					<NavLink to='/'>
						<div className='head__logo'>
						</div>
					</NavLink>
				    <div 
				    	className='head__callback' 
				    	onClick= {() => this.setState({modalwindow: true})}
				    >
				      <p className='callback__text'>
				        Заказать звонок
				      </p>
				    </div>
				</div>
				<div  
					className={this.state.modalwindow ? 'modal' : 'modal_hidden' }
					>
					<div>
						Модальное окно
					</div>
				</div>
				<div className='menu'>
					<Menu />
				</div>
				<div className='content'>
					{this.props.children}
				</div>
				<div className='footer'>
					<div className='footer__contacts'>
						<div className='contacts__info'>
							8 (495) 405-01-35
						</div>
						<div className='marginBottom'>
							INFO@PEIKO.RU
						</div>
						<div className='contacts__text'>
							Наро-Фоминский район, пос. Селятино,
							ул. Вокзальная, дом 2
						</div>
					</div>
					<div className='footer__message'>
						<div className='message__text'>
							Напишите нам
						</div>
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