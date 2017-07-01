import React from "react";
import {connect} from "react-redux";
import { Item } from "../components/Item";
import { CartItem } from "../components/CartItem";
import { selectItem, addItem, subtractItem, deleteItem } from "../actions/itemActions";
import Gridify from 'react-bootstrap-gridify';

class App extends React.Component {

    render() {
        let arrayOfItems =
            this.props.items.itemList.map((i, idx) =>
                <Item
                    key={idx}
                    itemInfo={i}
                    selectItem={() => this.props.selectItem(i.id)}
                />
            )
        let arrayOfCartItems =
            this.props.items.itemList.filter(il => il.selected)
                .map((i, idx) =>
                    <CartItem
                        key={idx}
                        itemInfo={i}
                        addItem={() => this.props.addItem(i.id)}
                        subtractItem={() => this.props.subtractItem(i.id)}
                        deleteItem={() => this.props.deleteItem(i.id)}
                    />
                )
        let total = 0;
        this.props.items.itemList.filter(i => i.selected)
            .forEach((il) => {
                total += (parseFloat(il.quantityOrdered) * parseFloat(il.price));
            });
        let cols = 3;
        let shopGrid = (
            <div className="container" style={{border: '2px solid LightSeaGreen'}}>
                <Gridify columns={{xs:1, sm:1, md:4, lg:4}} components={arrayOfItems}/>
            </div>
        );
        let cartGrid = (
            <div style={{width: '25%', float: 'right', border: '2px solid LightSeaGreen'}}>
                <h1>Shopping Cart</h1>
                <span>{`${this.props.items.itemList.filter(i => i.selected).length} items`}</span>
                <div className="container">
                    <Gridify columns={{xs:1, sm:1, md:1, lg:1}} components={arrayOfCartItems}/>
                </div>
                {`Total: $${total}`}
            </div>
        );
        let arrayOfGrids = [shopGrid, cartGrid];
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
