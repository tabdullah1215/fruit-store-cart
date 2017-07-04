/**
 * Created by TAbdullah on 6/30/2017.
 */

import React from "react";
import {Grid, Row, Col, Button} from 'react-bootstrap';

export const CartItem = (props) => {
    const {itemName, imgSrc, price, quantityRemaining, selected, quantityOrdered} = props.itemInfo;
    return (
        <Grid style={{backgroundColor: 'MediumSpringGreen', width: '100%'}}>
            <Row className="show-grid" style={{verticalAlign: 'bottom'}}>
              <Col sm={4}>
                <img src={imgSrc} style={{maxWidth: '75px', maxHeight:'75px', minWidth: '75px', minHeight:'75px'}}/>
              </Col>
              <Col sm={8} style={{marginTop: '15px'}}>
                <div style={{display: 'inline'}}>
                    <button onClick={() => props.subtractItem()}>{' - '}</button>
                    <span style={{paddingLeft: '5px', paddingRight: '5px'}}>{quantityOrdered}</span>
                    <button onClick={() => props.addItem()}>{' + '}</button>
                </div>
              </Col>
            </Row>
            <Row className="show-grid">
              <Col sm={6}>
                <div>{`@ $${price} each = $${parseFloat(quantityOrdered) * parseFloat(price)}`}</div>
              </Col>
              <Col sm={6}>
                <a href="#" onClick={() => props.deleteItem()}>Delete</a>
              </Col>
            </Row>
        </Grid>
    );
};
