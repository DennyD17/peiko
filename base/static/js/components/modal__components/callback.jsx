import React from 'react';
import ReactDom from 'react-dom';

export default class Callback extends React.Component {

	ComponentDidMount() {
		
	}

	render() {
		return(
			<div className="modalCallback">
				<h1 className="modalCallback__header">Заказать звонок</h1>
				<form 
					action="/callback" 
					method="POST"
				>
					<div className="modalCallback__input">
						<label htmlFor="name">
						Ваше имя: 
						</label>
						<input 
							name="name" 
							type="text"
							value={this.props.name}
							onChange={(e) => this.props.validate(e, 'callbackName')}
							id="name" 
						required/>
					</div>
					<div className="modalCallback__input">
						<label htmlFor="phone">
						Ваш телефон: 
						</label>
						<input 
							name="phone" 
							type="tel" 
							id="phone"
							value={this.props.phone} 
							onChange={(e) => this.props.validate(e, 'callbackPhone')}
							required/>
					</div>
					<input type="submit" value="Отправить заявку"/>
				</form>
			</div>
			)
	}
}