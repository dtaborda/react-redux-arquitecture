import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './nav.scss';
import ba_btn_image from "app/assets/bastrap3/ba-btn.png";
import { Link } from 'react-router'

export default class Nav extends Component {
    
    static get propTypes() {
        return {
            title: PropTypes.string,
            links: PropTypes.array
        };
    }

    static defaultProps = {
        links: [
            {
                refTo: "/",
                displayName: "Inicio",
                onlyActiveOnIndex: true,
            }
        ],
        title: "GCBA"
    }

    render() {
        return (
            <nav className="navbar navbar-default" role="navigation">
                <div className="container">
                  <div className="row">
                      <div className="navbar-header">
                          <a className="navbar-brand" href="#" title={"this.props.title"}>{this.props.title}</a>
                      </div>
                      <div className="collapse navbar-collapse" id="main-nav">
                          <ul className="nav navbar-nav navbar-right">
                              {this.props.links.map(function(link,index){
                                  return <li key={index}><Link to={link.refTo} activeClassName="active" onlyActiveOnIndex={link.onlyActiveOnIndex}>{link.displayName}</Link></li>;
                              })}
                              <li className="active-BA">
                                  <a href="#">
                                      Entrar a <img src={ba_btn_image} className="glyphicon glyphicon-ba" />
                                  </a>
                              </li>
                          </ul>
                      </div>
                  </div>
                </div>
            </nav>
        );
    }
}
