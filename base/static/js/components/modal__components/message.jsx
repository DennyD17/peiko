import React from 'react';
import ReactDom from 'react-dom';

export default class Callback extends React.Component {

	render() {
		return(
			<div className="modalCallback">
				<h1 className="modalCallback__header">Отправить сообщение</h1>
				<form 
					action="/message" 
					method="POST"
					id="messageForm"
				>
					<div className="modalCallback__input">
						<label htmlFor="name">
						Ваше имя: 
						</label>
						<input 
							name="name" 
							type="text"
							onChange={(e) => this.props.validate(e, 'messageName')}
							value={this.props.name} 
							id="name" required/>
					</div>
					<div className="modalCallback__input">
						<label htmlFor="E-mail">
						Ваша почта: 
						</label>
						<input 
							name="mail" 
							type="text"
							onChange={(e) => this.props.validate(e, 'messageMail')}
							value={this.props.mail} 
							id="mail" required/>
					</div>
					<div className="modalCallback__input">
						<label htmlFor="E-mail">
						Сообщение: 
						</label>
						<textarea 
							name="message" 
							type="text" 
							onChange={(e) => this.props.validate(e, 'messageText')}
							value={this.props.text}
							id="message"
							form="messageForm"
						required/>
					</div>
					<input type="submit" value="Отправить сообщение" />
				</form>
			</div>
			)
	}
}	