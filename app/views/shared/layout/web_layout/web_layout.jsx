import React, {Component, PropTypes} from 'react';
import Footer from '../footer';
import GcbaHeader from '../gcba_header';

export default class WebLayout extends Component {
	static get propTypes() {
		return {
			children: PropTypes.element.isRequired
		};
	}

	render() {
		return (
			<div>
				<GcbaHeader />
				<div>
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}
