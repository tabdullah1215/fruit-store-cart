/**
 * Created by TAbdullah on 6/29/2017.
 */

import getItemList from '../data/store_items';

const itemReducer = (state = {
     itemList: getItemList().map((i, idx) => {
         return {
             ...i, id: idx, selected: false, quantityOrdered: 0
         }
     })
}, action) => {
    switch (action.type) {
        case "SELECT_ITEM":
            state = {
                ...state,
                itemList: state.itemList.reduce((acc, i) => {
                  if(i.id === action.payload) {
                    i.selected = true;
                    i.quantityOrdered = 1;
                  }
                  acc = [...acc, i];
                  return acc;
                }, [])
            };
            break;
        case "ADD_ITEM":
            state = {
                ...state,
                itemList: state.itemList.reduce((acc, i) => {
                    if(i.id === action.payload && i.quantityOrdered < i.quantityRemaining){
                          i.quantityOrdered++;
                    }
                    acc = [...acc, i];
                    return acc;
                }, [])
            };
            break;
        case "SUBTRACT_ITEM":
            state = {
                ...state,
                itemList: state.itemList.reduce((acc, i) => {
                    if(i.id === action.payload && i.quantityOrdered > 1) {
                            i.quantityOrdered--;
                    }
                    acc = [...acc, i];
                    return acc;
                }, [])
            };
            break;
        case "DELETE_ITEM":
            state = {
                ...state,
                itemList: state.itemList.reduce((acc, i) => {
                    if(i.id === action.payload) {
                        i.quantityOrdered = 0;
                        i.selected = false;
                    }
                    acc = [...acc, i];
                    return acc;
                }, [])
            };
            break;
        case "EMPTY_CART":
            state = {
                ...state,
                itemList: state.itemList.reduce((acc, i) => {
                    if(i.selected) {
                        i.quantityOrdered = 0;
                        i.selected = false;
                    }
                    acc = [...acc, i];
                    return acc;
                }, [])
            };
            break;
        case "CONFIRM_PURCHASE":
            state = {
                ...state,
                itemList: state.itemList.reduce((acc, i) => {
                    if(i.selected) {
                        i.quantityRemaining -= i.quantityOrdered;
                        i.quantityOrdered = 0;
                        i.selected = false;
                    }
                    acc = [...acc, i];
                    return acc;
                }, [])
            };

    }
    return state;
};

export default itemReducer;