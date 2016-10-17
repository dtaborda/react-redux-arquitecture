import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';
import styles from './footer.scss';

export default class Footer extends Component {
    static get propTypes() {
        return {};
    }

    render() {
        return (
            <footer>
                <div className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-sm-6">
                                <a className="navbar-brand bac-footer" href="http://www.buenosaires.gob.ar" target="_blank">Buenos Aires Ciudad</a>
                            </div>
                            <div className="col-md-6 col-sm-6">
                                <div className="sub-brand">
                                    <p>Dirección General de Gestión Digital<br />
                                        <span className="text-muted">Ministerio de Modernización</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
