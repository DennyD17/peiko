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
				>
					<div className="modalCallback__input">
						<label htmlFor="name">
						Ваше имя: 
						</label>
						<input name="name" type="text" id="name" required/>
					</div>
					<div className="modalCallback__input">
						<label htmlFor="E-mail">
						Ваша почта: 
						</label>
						<input name="mail" type="text" id="mail" required/>
					</div>
					<div className="modalCallback__input">
						<label htmlFor="E-mail">
						Сообщение: 
						</label>
						<input name="message" type="text" id="message" required/>
					</div>
					<input type="submit" value="Отправить сообщение" />
				</form>
			</div>
			)
	}
}	