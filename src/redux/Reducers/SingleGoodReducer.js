import {
  GET_GOOD_REQUEST,
  GET_GOOD_FAILURE,
  GET_GOOD_SUCCESS,
} from "../Actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

function SingleGoodReducer(state = initialState, action) {
  switch (action.type) {
    case GET_GOOD_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_GOOD_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case GET_GOOD_SUCCESS:
      const { items } = action.payload;
      return {
        ...state,
        items,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}

export { SingleGoodReducer };
