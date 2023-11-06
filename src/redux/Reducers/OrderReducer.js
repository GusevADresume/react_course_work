import {
  POST_ORDER_REQUEST,
  POST_ORDER_FAILURE,
  POST_ORDER_SUCCESS,
} from "../Actions/actionTypes";

const initialState = {
  order: null,
  loading: false,
  error: null,
  status: null,
};

function OrderReducer(state = initialState, action) {
  switch (action.type) {
    case POST_ORDER_REQUEST:
      const { order } = action.payload;
      return {
        ...state,
        order: order,
        loading: true,
        error: null,
      };
    case POST_ORDER_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case POST_ORDER_SUCCESS:
      const { status } = action.payload;
      return {
        ...state,
        loading: false,
        error: null,
        status: status,
      };
    default:
      return state;
  }
}

export { OrderReducer };
