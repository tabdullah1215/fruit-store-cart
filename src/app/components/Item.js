/**
 * Created by TAbdullah on 6/29/2017.
 */

import React from "react";
import {Grid, Row, Col, Button} from 'react-bootstrap';

export const Item = (props) => {
    const {itemName, imgSrc, price, quantityRemaining} = props.itemInfo;

    return (
        <div style={{minHeight: '100%'}}>
            <Grid style={{paddingBottom: '15px', marginTop: '10px', marginBottom: '10px', width:'100%', height: '100%', border:'1px solid MediumSeaGreen'}} >
                <Row className="show-grid" >
                    <Col sm={12}>
                        <div style={{width: '100%', textAlign: 'center'}}>
                        <img src={imgSrc} style={{minWidth: '125px', minHeight:'125px', maxWidth: '125px', maxHeight:'125px'}}/>
                        </div>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={12} style={{fontWeight: 'bold', textAlign: 'center'}}>
                        {itemName.charAt(0).toUpperCase() + itemName.slice(1)}
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={12}>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <span style={{fontWeight: 'bold', fontSize: 'x-large'}}>{`$${price.toFixed(2)}`}</span>
                            <span style={{fontWeight: 'bold', fontSize: 'small'}} >{` ${quantityRemaining} in Stock`}</span>
                        </div>
                    </Col>
                </Row>
                <Row className="show-grid">
                    <Col sm={12}>
                        <div style={{width: '100%', textAlign: 'center'}}>
                            <button
                                style={{width: '90%', height: '30px', borderRadius: '8px', backgroundColor: 'MediumSeaGreen', fontWeight: 'bold'}}
                                disabled={quantityRemaining === 0}
                                onClick={props.selectItem}>
                                Add to Cart
                            </button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};
