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
            <div className="container" style={{border: '2px solid LightSeaGreen'}}>
                <Gridify columns={{xs:1, sm:1, md:4, lg:4}} components={items}/>
            </div>
        );
    }
    getCartGrid(cartItems, total) {
        const {itemList} = this.props.items;
        return (
            <div style={{width: '25%', float: 'right', border: '2px solid LightSeaGreen'}}>
                <h1>Shopping Cart</h1>
                <span>{`${itemList.filter(i => i.selected).length} items`}</span>
                <div className="container">
                    <Gridify columns={{xs:1, sm:1, md:1, lg:1}} components={cartItems}/>
                </div>
                {`Total: $${total}`}
                <a href="#" onClick={() => this.props.emptyCart()}>Empty Cart</a>
                <button
                    className="btn btn-success"
                    onClick={() => this.props.confirmPurchase()}>
                    Confirm Purchase
                </button>
            </div>
        );
    }
    render() {
        const {itemList} = this.props.items;
        let arrayOfGrids = [
            this.getShopGrid(this.getArrayOfItems())
            , this.getCartGrid(this.getArrayOfCartItems(), this.getTotal())
        ];
        return (
            <div style={{display: 'inline'}}>
               <Gridify columns={{xs:1, sm:1, md:2, lg:2}} components={arrayOfGrids}/>
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
