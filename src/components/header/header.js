import React from 'react';
import './header.css';
import {NavLink} from 'react-router-dom';
import {CartBlock} from '../cart-block'

export const Header = ()=> {
	return(
		<div className="header">
			<div className="wrapper">
			<NavLink to="/" className="header__store-title">
				<span className="word-den">Den</span> GameShop
			</NavLink>
			<div className="wrapper header__cart-btn-wrapper">
				<CartBlock />
			</div>
			</div>
		</div>
	);
}