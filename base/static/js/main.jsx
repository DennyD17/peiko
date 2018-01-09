import React from 'react';
import ReactDom from 'react-dom';
import styles from '../css/style.css';

export default class Main extends React.Component {

	render() {
		return (
			<div>
				<div className={styles.head}>
					<div className={styles.head__logo}></div>
				    <div className="head__callback">
				      <p className="callback__text">
				        Заказать звонок
				      </p>
				    </div>
				</div>
				<div className='menu'>
				</div>
				<div>
				</div>
				<div className='footer'>
				</div>
			</div>
			)
	}
}