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

	constructor() {
		super();

		this.state = {
			callbackModal: false,
			sendMessageModal: false,
			callbackName: '',
			callbackPhone: '',
			messageName: '',
			messageMail: '',
			messageText: '',
			mainName: '',
			mainMail: '',
		}

		this.setModalVisible = this.setModalVisible.bind(this);
		this.validate = this.validate.bind(this);
		this.changeModalState = this.changeModalState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	setModalVisible(stateOptions, stateStatus) {
		this.setState({
			[stateOptions]: stateStatus,
			callbackName: '',
			callbackPhone: '',
			messageName: '',
			messageMail: '',
			messageText: ''
		})
	}

	validate(e, stateOptions) {
		this.setState({
			[stateOptions]: e.target.value
		})
	}

	changeModalState() {
		this.setState({
			callbackPhone: '',
			callbackName: ''
		})
	}


  handleSubmit(e, url) {
    event.preventDefault();
    const data = new FormData(e.target);
    
    fetch(url, {
      method: 'POST',
      body: data,
    });
  }

	render() {

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
				        ЗАКАЗАТЬ ЗВОНОК
				      </p>
				    </div>
				    <div className='head__info'>
							8 (495) 405-01-35
					</div>
				</div>
				<Modal
					visibility={this.state.callbackModal} 
					setInvisible={this.setModalVisible}
					statePoint={'callbackModal'}
				>
						<Callback
							validate={this.validate}
							name={this.state.callbackName}
							phone={this.state.callbackPhone} 
						/>
				</Modal>
				<Modal
					isVisible={this.state.sendMessageModal}
					visibility={this.state.sendMessageModal}
					setInvisible={this.setModalVisible}
					statePoint={'sendMessageModal'}
					>
					<Message 
						name={this.state.messageName}
						mail={this.state.messageMail}
						text={this.state.messageText}
						validate={this.validate}
					/>
				</Modal>
				<div className='menu'>
					<Menu />
				</div>
				<div className='content'>
					{this.props.children}
				</div>
				<div className="textBack">
					<h1>Не нашли нужный товар?</h1>
					<p>Оставьте заявку - наш менеджер Вам перезвонит</p>
					<form 
						action="/" 
						method="POST"
						onSubmit={(e) => this.handleSubmit(e, '/')}
						>
						<div className="textBack__element">
							<label htmlFor="name">
								Ваше Имя
							</label>
							<input type="text" name="name" required/>
						</div>
						<div className="textBack__element">
							<label htmlFor="mail">
								Ваш e-mail
							</label>
							<input type="text" name="mail" required/>
						</div>
						<div className="textBack__element">
							<input type="submit" value="Оставить заявку" />
						</div>
					</form>
				</div>
				<div className='footer'>
					<div className='footer__contacts'>
						<div className='contacts__phone'>
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
							НАПИШИТЕ НАМ
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