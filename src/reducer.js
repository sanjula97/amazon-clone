export  const initialState = {
    basket: [],
    user: null
};

const reducer = (state,action) => {
    console.log(action);
    switch(action.type){
        case 'ADD_TO_BASKET':
            //Logic for adding item to basket
            return {
                ...state,
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            //Logicfor removing item from basket
            let newBasket = [...state.basket];

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);

            if(index >= 0){
                newBasket.splice(index,1);
            }else {
                console.warn(`cant remoce product (id:${action.id}) as its not in basket`);
            }

            return {...state,basket: newBasket}
        default:
            return state;
    }
}

export default reducer;