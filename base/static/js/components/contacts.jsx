import React from 'react';
import ReactDom from 'react-dom';

import YandexMap from './YandexMap'

export default class Contacts extends React.Component{
	
	constructor(props){
		super(props);
	
	}

	render() {
		return(
				<div className="contacts">
					<div className="contacts__info">
							<div className='info__element'>
								<div>Адрес:</div>
								<div>Наро-Фоминский район, пос. Селятино, ул. Вокзальная, дом 2</div>
							</div>
							<div className='info__element'>
								<div>Телефон:</div>
								<div>8 (495) 405-01-35</div>
							</div>
							<div className='info__element'>
								<div>E-mail:</div>
								<div>info@peiko.ru</div>
							</div>
					</div>
					<div className="contacts__map">
						<YandexMap/>
					</div>
				</div>
			)
	}
}