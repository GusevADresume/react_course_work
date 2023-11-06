import {
  GET_HITS_FAILURE,
  GET_HITS_REQUEST,
  GET_HITS_SUCCESS,
} from "../Actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

function hitsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_HITS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_HITS_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case GET_HITS_SUCCESS:
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

export { hitsReducer };
