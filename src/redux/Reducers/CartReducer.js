import { CHANGE_CART_STATE, CHANGE_CART_SUCCESS } from "../Actions/actionTypes";

const initialState = {
  countInput: {},
  countSucces: [],
};

function CartReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CART_STATE:
      const { countInput } = action.payload;
      return {
        ...state,
        countInput,
      };
    case CHANGE_CART_SUCCESS:
      const { countSucces } = action.payload;
      return {
        ...state,
        countSucces,
      };
    default:
      return {
        ...state,
        countInput: 0,
        countSucces: 0,
      };
  }
}

export { CartReducer };
