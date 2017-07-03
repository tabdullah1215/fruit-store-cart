import React from "react";
import {connect} from "react-redux";
import { Item } from "../components/Item";
import { CartItem } from "../components/CartItem";
import { selectItem, addItem, subtractItem, deleteItem, emptyCart, confirmPurchase } from "../actions/itemActions";
import Gridify from 'react-bootstrap-gridify';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class App extends React.Component {
    getArrayOfItems() {
        const {itemList} = this.props.items;
        return (
        itemList.map((i, idx) =>
            <Item
                key={idx}
                itemInfo={i}
                selectItem={() => this.props.selectItem(i.id)}
            />
        ));
    }
    getArrayOfCartItems() {
        const {itemList} = this.props.items;
        return (
            itemList.filter(il => il.selected)
                .map((i, idx) =>
                    <CartItem
                        key={idx}
                        itemInfo={i}
                        addItem={() => this.props.addItem(i.id)}
                        subtractItem={() => this.props.subtractItem(i.id)}
                        deleteItem={() => this.props.deleteItem(i.id)}
                    />
                )
        );
    }
    getTotal() {
        const {itemList} = this.props.items;
        let total = 0;
        itemList.filter(i => i.selected)
            .forEach((il) => {
                total += (parseFloat(il.quantityOrdered) * parseFloat(il.price));
            });
        return total;
    }
    getShopGrid(items) {
        const {itemList} = this.props.items;
        return (
            <div className="container" style={{float: 'left', width: '75%', border: '2px solid MediumSeaGreen'}}>
                <Gridify columns={{xs:1, sm:1, md:3, lg:4}} components={items}/>
            </div>
        );
    }
    getCartGrid(cartItems, total) {
        const {itemList} = this.props.items;
        return (
            <div>
                <div style={{width: '25%', float: 'right', border: '2px solid MediumSeaGreen', textAlign: 'center', minHeight: '490px'}}>
                    <div style={{backgroundColor: 'MediumSeaGreen'}}>
                        <div style={{fontSize: '24px', fontFamily: 'Arial Black', color: 'white', paddingTop: '20px' }}>Shopping Cart</div>
                        <span style={{color: 'white'}}>{`${itemList.filter(i => i.selected).length} items`}</span>
                    </div>
                    <div>
                        <Gridify columns={{xs:1, sm:1, md:1, lg:1}} components={cartItems}/>
                    </div>
                    <Grid style={{width: '100%'}}>
                        <Row className="show-grid">
                            <Col sm={12}>
                                <div style={{textAlign: 'right', color: 'white', borderTop: '2px solid white', backgroundColor: 'MediumSeaGreen'}}>
                                    <div style={{float: 'right', paddingTop: '20px', paddingRight: '5px', fontWeight: 'bold'}}>{`Total: $${total}`}</div>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div>
                                    <button
                                        style={{float: 'right', width: '70%', height: '30px', borderRadius: '8px', backgroundColor: 'MediumSpringGreen', color: 'black', fontWeight: 'bold'}}
                                        onClick={() => this.props.confirmPurchase()}>
                                        Confirm Purchase
                                    </button>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12}>
                                <div style={{float: 'right', fontSize: 'small'}}><a href="#" onClick={() => this.props.emptyCart()}>Empty Cart</a></div>
                            </Col>
                        </Row>
                    </Grid>

                </div>

            </div>
        );
    }
    render() {
        const {itemList} = this.props.items;
        return (
            <div style={{maxWidth: '1200px', maxHeight: '490px', position: 'absolute', top: '10%', left: '10%'}}>
                {this.getShopGrid(this.getArrayOfItems())}
                {this.getCartGrid(this.getArrayOfCartItems(), this.getTotal())}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
      items: state.items
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        selectItem: (id) => {
            dispatch(selectItem(id));
        },
        addItem: (id) => {
            dispatch(addItem(id));
        },
        subtractItem: (id) => {
            dispatch(subtractItem(id));
        },
        deleteItem: (id) => {
            dispatch(deleteItem(id));
        },
        emptyCart: (id) => {
            dispatch(emptyCart());
        },
        confirmPurchase: (id) => {
            dispatch(confirmPurchase());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
