/**
 * Created by TAbdullah on 6/29/2017.
 */

import React from "react";
import {Grid, Row, Col, Button} from 'react-bootstrap';

export const Item = (props) => {
    const {itemName, imgSrc, price, quantityRemaining, selected} = props.itemInfo;

    return (
        <div>
        <Grid style={{paddingBottom: '15px', marginTop: '10px', marginBottom: '10px', width:'100%', minWidth: '150px', height: '100%', border:'2px solid LightSeaGreen'}} >
            <Row className="show-grid" >
                <Col sm={12}>
                    <img src={imgSrc} style={{maxWidth: '150px', maxHeight:'300px'}}/>
                </Col>
            </Row>
            <Row className="show-grid">
                <Col sm={12} style={{textAlign: 'center'}}>
                {itemName}
                </Col>
            </Row>
            <Row className="show-grid">
                <Col sm={3}/>
                <Col sm={3} bsSize="large">
                  {`$${price}`}
                </Col>
                <Col sm={6}>
                  {`${quantityRemaining} in stock`}
                </Col>
            </Row>
            <Row className="show-grid">
                <Col sm={3}/>
                <Col sm={6}>
                    <button
                        className="btn btn-success"
                        onClick={() => props.selectItem()}>
                        Add to Cart
                    </button>
                </Col>
            </Row>
        </Grid>
        </div>
    );
};
