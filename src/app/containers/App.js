import React from "react";
import {connect} from "react-redux";
import { Item } from "../components/Item";
import { CartItem } from "../components/CartItem";
import { CartHeader } from "../components/CartHeader";
import { CartFooter } from "../components/CartFooter";
import { selectItem, addItem, subtractItem, deleteItem, emptyCart, confirmPurchase } from "../actions/itemActions";
import Gridify from 'react-bootstrap-gridify';

class App extends React.Component {
    getArrayOfItems() {
        const {items} = this.props;
        return (
        items.map((i, idx) =>
            <Item
                key={idx}
                itemInfo={i}
                selectItem={() => this.props.selectItem(i.id)}
            />
        ));
    }
    getArrayOfCartItems() {
        const {items} = this.props;
        return (
            items.filter(il => il.selected)
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
        const {items} = this.props;
        let total = 0;
        items.filter(i => i.selected)
            .forEach((il) => {
                total += ((il.quantityOrdered) * (il.price));
            });
        return total;
    }
    getShopGrid(arrayOfItems) {
        const {items} = this.props;
        return (
            <div>
                <div style={{paddingLeft: '20px'}}><span style={{backgroundColor: 'MediumSeaGreen', color: 'white', fontFamily: 'Arial Black', fontSize: '36px', fontWeight: 'bold', paddingRight: '40px', paddingLeft: '40px'}}>Fruits</span></div>
                <div className="container" style={{float: 'left', width: '75%', border: '2px solid MediumSeaGreen', borderRight: '0px'}}>
                    <Gridify columns={{xs:4, sm:4, md:4, lg:4}} components={arrayOfItems}/>
                </div>
            </div>
        );
    }
    getCartGrid(cartItems, total) {
        const {items} = this.props;
        return (
            <div style={{width: '25%', float: 'right', border: '2px solid MediumSeaGreen', textAlign: 'center', backgroundColor: 'MediumSeaGreen' }}>
                <div style={{minHeight: '496px'}}>
                    <CartHeader title="Shopping Cart" numItems={items.filter(i => i.selected).length}></CartHeader>
                    <div className="empty" style={{overflowY: 'auto', overflowX: 'hidden', minHeight: '422px', maxHeight: '422px', backgroundColor: 'MediumSeaGreen'}}>
                        <Gridify columns={{xs:1, sm:1, md:1, lg:1}} components={cartItems}/>
                    </div>
                </div>
                <CartFooter total={total} confirmPurchase={() => this.props.confirmPurchase()} emptyCart={() => this.props.emptyCart()} />
            </div>
        );
    }
    render() {
        const {items} = this.props;
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
      items: state.itemReducer.items
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
        emptyCart: () => {
            dispatch(emptyCart());
        },
        confirmPurchase: () => {
            dispatch(confirmPurchase());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
