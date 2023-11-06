import {
  GET_CATALOG_REQUEST,
  GET_CATALOG_FAILURE,
  GET_CATALOG_SUCCESS,
} from "../Actions/actionTypes";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

function CatalogReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATALOG_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_CATALOG_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error,
      };
    case GET_CATALOG_SUCCESS:
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

export { CatalogReducer };
