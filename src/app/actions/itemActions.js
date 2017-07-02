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

export function deleteItem(id) {
    return {
        type: "DELETE_ITEM",
        payload: id
    }
}

export function emptyCart() {
    return {
        type: "EMPTY_CART"
    }
}

export function confirmPurchase() {
    return {
        type: "CONFIRM_PURCHASE",
    }
}
