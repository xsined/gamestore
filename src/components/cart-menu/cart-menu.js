import React from 'react';
import {calcTotalPrice} from '../utils';
import {Button} from '../button'; 
import {CartItem} from '../cart-item';
import './cart-menu.css';

export const CartMenu = ({items, onClick}) => {
	return(
		<div className="cart-menu">
				<div className="cart-menu__games-list">
					{
						items.length > 0 ? items.map((game) => (
							<CartItem 
							key={game.title} 
							price={game.price} 
							title={game.title} 
							id={game.id}
							/> 
							)): 'Корзина пуста' }
				</div>
				{
					items.length > 0 ?
					<div className="cart-menu__arrange">
						<div className="cart-menu__total-price">
						<span>Сумма до сплати:</span>
						<span>{calcTotalPrice(items)}.грн</span>
						</div>
						<Button type="primary" size="m" onClick={onClick}>
							Оформити купівлю
						</Button>
					</div>
					: null 
				}
		</div>	
	)
}