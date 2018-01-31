import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { NavLink } from 'react-router-dom';

import styles from '../../css/style.css';
import Menu from './menu'
import Modal from './modal'
import Callback from './modal__components/callback'
import Message from './modal__components/message'

export default class Main extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			callbackModal: false,
			sendMessageModal: false,
		}
		this.setModalVisible = this.setModalVisible.bind(this)
	}

	setModalVisible(stateOptions, stateStatus) {
		this.setState({
			[stateOptions]: stateStatus
		})
	}


	render() {
		console.log('Modal is visible: ' + this.state.callbackModal)
		return (
			<div className='body'>
				<div className='head'>
					<NavLink to='/'>
						<div className='head__logo'>
						</div>
					</NavLink>
				    <div 
				    	className='head__callback'
				    	onClick= {() => this.setModalVisible('callbackModal', true)}
				    >
				      <p className='callback__text'>
				        Заказать звонок
				      </p>
				    </div>
				</div>
				<Modal 
					visibility={this.state.callbackModal} 
					setInvisible={this.setModalVisible}
					statePoint={'callbackModal'}
					>
						<Callback />
				</Modal>
				<Modal
					visibility={this.state.sendMessageModal}
					setInvisible={this.setModalVisible}
					statePoint={'sendMessageModal'}
					>
					<Message />
				</Modal>
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
						<div 
							className='message__text'
							onClick= {() => this.setState({sendMessageModal: true})}
							>
							<div className='text__box'>
							Напишите нам
							</div>
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