import React, {Component, PropTypes} from 'react';
import Footer from 'app/views/shared/layout/footer';
import Header from 'app/views/shared/layout/gcba_header';

export default class WebLayout extends Component {
	static get propTypes() {
		return {
			children: PropTypes.element.isRequired,
      navLinks: PropTypes.array.isRequired,
      navTitle: PropTypes.string.isRequired
		};
	}

	render() {
		return (
			<div>
				<Header />

				<div>
					{this.props.children}
				</div>
				<Footer/>
			</div>
		);
	}
}
