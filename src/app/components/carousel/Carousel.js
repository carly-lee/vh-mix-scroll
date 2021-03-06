import React, { PureComponent } from 'react';

import { CarouselItem } from 'components/carousel';
import styles from './carousel.css';

export default class Carousel extends PureComponent{
	static propTypes = {
		list: React.PropTypes.array.isRequired,
	}

	constructor( props ){
		super( props );
		this.state = {
			currentIndex:0,
		};
	}

	_getItems( list ){
		return <CarouselItem data={ list[0] } />;
    // return list.map(( obj, idx, array )=>{
    //   return <CarouselItem key={idx} data={obj} />;
    // });
	}

	render(){
		const { list } = this.props;

		return(
			<div className={ styles.carousel }>
				{ this._getItems( list )}
				<div className={ styles.textContainer }>
					<h1 className={ styles.title }>My travel<br />photo gallery</h1>
					<p className={ styles.description }>These are photos I have taken while travel several cities.</p>
				</div>
			</div>
		);
	}
}
