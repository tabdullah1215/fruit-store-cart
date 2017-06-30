/**
 * Created by TAbdullah on 6/29/2017.
 */

const itemReducer = (state = {
     itemList: [
        {
            "id": 1,
            "itemName": "banana",
            "imgSrc": "https://tinyurl.com/zcdrymz",
            "price": 1.25,
            "quantityRemaining": 10,
            "selected": false,
            "quantityOrdered": 0
        },
        {
            "id": 2,
            "itemName": "apple",
            "imgSrc": "https://tinyurl.com/lg5rj5z",
            "price": 2.50,
            "quantityRemaining": 5,
            "selected": false,
            "quantityOrdered": 0
        },
        {
            "id": 3,
            "itemName": "raspberry",
            "imgSrc": "https://tinyurl.com/mhoedwl",
            "price": 4.00,
            "quantityRemaining": 2,
            "selected": false,
            "quantityOrdered": 0
        },
         {
             "id": 4,
             "itemName": "kiwi",
             "imgSrc": "https://tinyurl.com/mdm9kho",
             "price": 3.33,
             "quantityRemaining": 15,
             "selected": false,
             "quantityOrdered": 0
         },
         {
             "id": 5,
             "itemName": "very delicious pineapple with a long name",
             "imgSrc": "https://tinyurl.com/k2oq2to",
             "price": 4.75,
             "quantityRemaining": 1,
             "selected": false,
             "quantityOrdered": 0
         },
         {
             "id": 6,
             "itemName": "strawberries",
             "imgSrc": "https://tinyurl.com/mhoedwl",
             "price": 2.05,
             "quantityRemaining": 3,
             "selected": false,
             "quantityOrdered": 0
         }
    ]
}, action) => {
    switch (action.type) {
        case "LOAD_ITEMS":
            state = {
                ...state,
                items: action.payload
            };
            break;
        case "SELECT_ITEM":
            state = {
                ...state,
                itemList: state.itemList.reduce((acc, i) => {
                  if(i.id === action.payload) {
                    i.selected = true;
                    i.quantityOrdered = 1;
                  }
                  acc.push(i);
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
                    acc.push(i);
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
                    acc.push(i);
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
                    acc.push(i);
                    return acc;
                }, [])
            };
            break;
    }
    return state;
};

export default itemReducer;