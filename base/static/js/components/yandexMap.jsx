import React from 'react';
import { YMaps, Map, Placemark, Control } from 'react-yandex-maps';

export default class YandexMap extends React.Component {

	render() {

		const mapState = { 
			center: [55.514927, 36.972039], 
			zoom: 15
		};

		const mapStyle = {
			width: '580px',
			height: '270px',
		}
		
		return(
			<YMaps id="yamap">
			    <Map state={mapState} width={mapStyle.width} height={mapStyle.height}>

					<Placemark
					        geometry={{
					          coordinates: [55.514641, 36.965117],
					        }}
					        properties={{
					          hintContent: 'ПЭКО',
					        }}
					        options={{
					          // Options. You must specify this type of layout.
					          preset: 'islands#redIcon',
					          // The size of the placemark.
					          iconImageSize: [43, 50],
					          // The offset of the upper left corner of the icon relative
					          // to its "tail" (the anchor point).
					          iconImageOffset: [-3, -42],
					        }}
					/>
			 
			    </Map>
			</YMaps>
			)
	}
}