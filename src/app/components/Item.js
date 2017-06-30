/**
 * Created by TAbdullah on 6/29/2017.
 */

import React from "react";
import {row} from 'react-bootstrap';

export const Item = (props) => {
    const {itemName, imgSrc, price, quantityRemaining, selected} = props.itemInfo;
    return (
        <div style={{width:'125px'}}>
                <div>
                    <img src={imgSrc} style={{width:'100px'}}/>
                    <div>{itemName}</div>
                    <div>{`$${price}`}</div><div>{`${quantityRemaining} in stock`}</div>
                    <button
                        className="btn btn-primary"
                        onClick={() => props.selectItem()}>
                        Add to Cart
                    </button>
                </div>
        </div>
    );
};
