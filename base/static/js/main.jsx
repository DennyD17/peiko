import React from 'react';
import ReactDom from 'react-dom';
import styles from '../css/style.css';

import Menu from './menu'

export default class Main extends React.Component {

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
					<Menu/>
				</div>
				<div className='content'>
				</div>
				<div className='footer'>
					<div className='footer__contacts'>
						<div className='contacts__info'>8 (495) 405-01-35</div>
						<div className='contacts__info'>INFO@PEIKO.RU</div>
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