/**
 * Created by TAbdullah on 7/5/2017.
 */
import React from "react";

export const CartHeader = (props) => {
    const {title, numItems} = props;

    return (
        <div style={{backgroundColor: 'MediumSeaGreen', borderBottom: '2px solid white'}}>
            <div style={{fontSize: '24px', fontFamily: 'Arial Black', color: 'white', paddingTop: '20px'}}>{title}</div>
            <span style={{color: 'white'}}>{`${numItems} items`}</span>
        </div>
    )
}