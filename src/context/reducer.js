
const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': 
      return {
        ...state,
        itemsInCart: [...state.itemsInCart, action.payload.newItem],
        totalAmount: state.totalAmount + action.payload.newItem.price,
        quantity: state.quantity + 1,
      };
    case 'REMOVE_ITEM':
      const itemToRemove = state.itemsInCart.find(item => item.id === action.payload.id)
      return {
        ...state, 
        itemsInCart: state.itemsInCart.filter(item => item.id !== action.payload.id),
        quantity: state.quantity - itemToRemove.quantity,
        totalAmount: state.totalAmount - (itemToRemove.price * itemToRemove.quantity)
      }
    case 'ADD_QUANTITY': 
      const quantityToAdd = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        itemsInCart: state.itemsInCart.map(item => {
          return item.id === action.payload.id ? {...item, quantity: item.quantity + 1} : item
        }),
        quantity: state.quantity + 1,
        totalAmount: state.totalAmount + quantityToAdd.price
      }
    case 'REDUCE_QUANTITY': 
       const quantityToReduce = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      return {
        ...state,
        itemsInCart: state.itemsInCart.map((item) => {
          return item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        }),
        quantity: state.quantity - 1,
        totalAmount: state.totalAmount - quantityToReduce.price,
      };
    default:
      return state;
  }
};


export default reducer
