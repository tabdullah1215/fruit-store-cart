import React from "react";
import {connect} from "react-redux";
import { Item } from "../components/Item";
import { CartItem } from "../components/CartItem";
import { selectItem, addItem, subtractItem } from "../actions/itemActions";

class App extends React.Component {
    render() {
        return (
            <div>
                <div className="container" style={{maxWidth: '400px'}}>
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
                <div className="container" style={{maxWidth: '200px'}}>
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
                            />
                        )
                    }
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
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
