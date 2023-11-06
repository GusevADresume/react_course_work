import { CHANGE_SEARCHICON_VALUE } from "../Actions/actionTypes";

const initialState = {
  searchIconValue: "",
};

function SearchIconReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCHICON_VALUE:
      const { searchIconValue } = action.payload;
      return {
        ...state,
        searchIconValue,
      };
    default:
      return state;
  }
}

export { SearchIconReducer };
