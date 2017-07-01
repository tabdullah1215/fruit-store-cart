import React from "react";
import {connect} from "react-redux";
import { Item } from "../components/Item";
import { CartItem } from "../components/CartItem";
import { selectItem, addItem, subtractItem, deleteItem } from "../actions/itemActions";

class App extends React.Component {

    render() {
        let total = 0;
        this.props.items.itemList.filter(i => i.selected)
            .forEach((il) => {
                total += (parseFloat(il.quantityOrdered) * parseFloat(il.price));
            });
        return (
            <div>
                <div>
                    {
                      this.props.items.itemList.map((i, idx) =>
                            <Item
                                key={idx}
                                itemInfo={i}
                                selectItem={() => this.props.selectItem(i.id)}
                            />
                        )
                    }
                </div>
                <div style={{maxWidth: '200px'}}>
                    <h1>Shopping Cart</h1>
                    <span>{`${this.props.items.itemList.filter(i => i.selected).length} items`}</span>
                    {
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
                    }
                    {`Total: $${total}`}
                </div>
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
