import React from "react";
import {connect} from "react-redux";
import { Item } from "../components/Item";
import { CartItem } from "../components/CartItem";
import { selectItem, addItem, subtractItem, deleteItem, emptyCart, confirmPurchase } from "../actions/itemActions";
import Gridify from 'react-bootstrap-gridify';

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
                <Gridify columns={{xs:4, sm:4, md:4, lg:4}} components={items}/>
            </div>
        );
    }
    getCartGrid(cartItems, total) {
        const {itemList} = this.props.items;
        return (
            <div style={{width: '25%', float: 'right', border: '2px solid MediumSeaGreen', textAlign: 'center' }}>
                <div style={{minHeight: '496px'}}>
                    <div style={{backgroundColor: 'MediumSeaGreen'}}>
                        <div style={{fontSize: '24px', fontFamily: 'Arial Black', color: 'white', paddingTop: '20px' }}>Shopping Cart</div>
                        <span style={{color: 'white'}}>{`${itemList.filter(i => i.selected).length} items`}</span>
                    </div>
                    <div className="empty" style={{overflowY: 'auto', overflowX: 'hidden', minHeight: '422px', maxHeight: '422px'}}>
                        <Gridify columns={{xs:1, sm:1, md:1, lg:1}} components={cartItems}/>
                    </div>
                </div>
                <div style={{backgroundColor: 'MediumSeaGreen', height: '120px', float: 'right', display: 'block', width: '100%', textAlign: 'right'}}>
                    <div style={{color: 'white', borderTop: '2px solid white', backgroundColor: 'MediumSeaGreen'}}>
                        <div style={{paddingTop: '20px', paddingRight: '5px', fontWeight: 'bold', fontSize: 'medium', marginRight: '10px'}}>{`Total: $${total}`}</div>
                    </div>

                    <div style={{fontSize: 'small'}}><a href="#" onClick={() => this.props.emptyCart()}><span style={{color: 'white', fontSize: 'small', marginRight: '10px'}}>Empty Cart</span></a></div>
                    <div>
                        <button
                            style={{width: '70%', height: '30px', borderRadius: '8px', backgroundColor: 'MediumSpringGreen', color: 'black', fontWeight: 'bold', margin: '10px'}}
                            onClick={() => this.props.confirmPurchase()}>
                            Confirm Purchase
                        </button>
                    </div>
                </div>
            </div>
        );
    }
    render() {
        const {itemList} = this.props.items;
        return (
            <div style={{minWidth: '1200px', minHeight: '496px', position: 'absolute', top: '10%', left: '10%'}}>
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
