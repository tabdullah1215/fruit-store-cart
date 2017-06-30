/**
 * Created by TAbdullah on 6/29/2017.
 */

export function selectItem(id) {
    return {
        type: "SELECT_ITEM",
        payload: id
    };
}

export function addItem(id) {
    console.log('additem: ', id);
    return {
        type: "ADD_ITEM",
        payload: id
    };
}

export function subtractItem(id) {
    return {
        type: "SUBTRACT_ITEM",
        payload: id
    };
}

export function loadItems(itemList) {
    return {
        type: "LOAD_ITEMS",
        payload: itemList
    };
}

export function deleteItem(id) {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}
