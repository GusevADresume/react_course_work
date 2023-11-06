import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { hitsReducer } from "../Reducers/hitsReducer";
import { CategoriesReducer } from "../Reducers/CategoriesReduser";
import { CatalogReducer } from "../Reducers/CatalogReducer";
import { SearchReducer } from "../Reducers/SearchReducer";
import { SingleGoodReducer } from "../Reducers/SingleGoodReducer";
import { CartReducer } from "../Reducers/CartReducer";
import { CategoryReducer } from "../Reducers/CategoryReducer";
import { OrderReducer } from "../Reducers/OrderReducer";
import { SearchIconReducer } from "../Reducers/SearchIconReducer";
import {
  getHitsEpic,
  getCategoriesEpic,
  getCatalogEpic,
  changeSearchEpic,
  getGoodEpic,
  changeCartStateEpic,
  changeCategoryEpic,
  postOrderEpic,
  changeSearchIconEpic,
} from "../Epics/epics";

const reducer = combineReducers({
  hits: hitsReducer,
  categories: CategoriesReducer,
  catalog: CatalogReducer,
  search: SearchReducer,
  singleGood: SingleGoodReducer,
  cartState: CartReducer,
  categoryId: CategoryReducer,
  order: OrderReducer,
  searchIconValue: SearchIconReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  getHitsEpic,
  getCategoriesEpic,
  getCatalogEpic,
  changeSearchEpic,
  getGoodEpic,
  changeCartStateEpic,
  changeCategoryEpic,
  postOrderEpic,
  changeSearchIconEpic
);

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(epic);

export { store };
