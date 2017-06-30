/**
 * Created by TAbdullah on 6/30/2017.
 */

import React from "react";
import {Row} from 'react-bootstrap';

export const CartItem = (props) => {
    const {itemName, imgSrc, price, quantityRemaining, selected, quantityOrdered} = props.itemInfo;
    return (
        <div style={{width:'125px'}}>
            <div>
                <img src={imgSrc} style={{width:'50px'}}/>
                <div>{itemName}</div>
                <div style={{display: 'inline'}}>
                    <button onClick={() => props.subtractItem()}>-</button>
                        {quantityOrdered}
                    <button onClick={() => props.addItem()}>+</button>
                </div>
                <div>{`@ $${price} each = $${parseFloat(quantityOrdered) * parseFloat(price)}`}</div>
                <a href="#" onClick={() => props.deleteItem()}>Delete</a>
            </div>
        </div>
    );
};
