import React, {useState, useCallback} from 'react';
import { useSelector } from 'react-redux';
import {BsCart2} from 'react-icons/bs';
import { CartMenu } from '../cart-menu';
import {ItemsInCart} from '../items-in-cart';
import {calcTotalPrice} from '../utils'; 
import { useNavigate } from "react-router-dom";
import './cart-block.css';



export const CartBlock = () => {
	const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
	const items = useSelector(state => state.cart.itemsInCart);
	const totalPrice = calcTotalPrice(items);
	const navigate = useNavigate();

	const handleClick = useCallback(() => {
		setIsCartMenuVisible(false);
		navigate('/order'); 

	}, [navigate]);
	
	return (
		<div className="cart-block">
		<ItemsInCart quantity={items.length}/>
			<BsCart2 size={30} 
			className="cart-block__icon" 
				onClick={()=>setIsCartMenuVisible(!isCartMenuVisible)}/>
			{totalPrice > 0 ? <span className="cart-block__total-price">{ totalPrice }.грн</span>: null }
			{isCartMenuVisible && <CartMenu items={items} 
				onClick={handleClick} />}
		</div>
	);
}