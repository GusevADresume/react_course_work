import { CHANGE_CATEGORY_ID } from "../Actions/actionTypes";

const initialState = {
  categoryId: " ",
  category: " ",
};

function CategoryReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_CATEGORY_ID:
      const { categoryId } = action.payload;
      return {
        ...state,
        categoryId,
      };

    default:
      return state;
  }
}

export { CategoryReducer };
