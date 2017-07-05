/**
 * Created by TAbdullah on 7/5/2017.
 */

import React from "react";

export const CartFooter = (props) => {
    const {total} = props;

    return (
        <div style={{backgroundColor: 'MediumSeaGreen', height: '120px', float: 'right', display: 'block', width: '90%', textAlign: 'right'}}>
            <div style={{color: 'white', borderTop: '2px solid white', backgroundColor: 'MediumSeaGreen'}}>
                <div style={{paddingTop: '20px', paddingRight: '5px', fontFamily: 'Arial Black', fontWeight: 'normal', fontSize: 'medium', marginRight: '10px'}}>{`Total: $${total.toFixed(2)}`}</div>
            </div>

            <div style={{fontSize: 'small'}}><a href="#" onClick={() => props.emptyCart()}><span style={{color: 'white', fontSize: 'small', marginRight: '10px'}}>Empty Cart</span></a></div>
            <div>
                <button
                    style={{width: '70%', height: '35px', borderRadius: '8px', backgroundColor: '#d9f2e4', color: 'black', fontFamily: 'Arial Black', fontSize: '16px', fontWeight: 'bold', margin: '10px'}}
                    onClick={() => props.confirmPurchase()}>
                    Confirm Purchase
                </button>
            </div>
        </div>
    )
}
