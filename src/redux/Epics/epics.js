import { ofType } from "redux-observable";
import { ajax } from "rxjs/ajax";
import {
  map,
  tap,
  retry,
  filter,
  debounceTime,
  switchMap,
  catchError,
} from "rxjs/operators";
import { of } from "rxjs";
import {
  GET_HITS_REQUEST,
  GET_CATEGORIES_REQUEST,
  GET_CATALOG_REQUEST,
  CHANGE_SEARCH_FIELD,
  GET_GOOD_REQUEST,
  CHANGE_CART_STATE,
  CHANGE_CATEGORY_ID,
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  CHANGE_SEARCHICON_VALUE,
} from "../Actions/actionTypes";
import {
  getHitsFailure,
  getHitssSuccess,
  getCategoriesSuccess,
  getCategoriesFailure,
  getCatalogSuccess,
  getCatalogFailure,
  changeSearchSuccess,
  getGoodFailure,
  getGoodSuccess,
  changeCartState,
  changeCountSucces,
  changeCategoryId,
  changeCategorySuccess,
  postOrderRequest,
  postOrderFailure,
  postOrderSuccess,
  changeSearchIconValue,
} from "../Actions/actionCreators";

const getHitsEpic = (action$) =>
  action$.pipe(
    ofType(GET_HITS_REQUEST),
    switchMap((o) =>
      ajax.getJSON("http://localhost:7070/api/top-sales").pipe(
        retry(4),
        map((o) => getHitssSuccess(o)),
        catchError((e) => of(getHitsFailure(e)))
      )
    )
  );

const getCategoriesEpic = (action$) =>
  action$.pipe(
    ofType(GET_CATEGORIES_REQUEST),
    switchMap((o) =>
      ajax.getJSON("http://localhost:7070/api/categories").pipe(
        map((o) => getCategoriesSuccess(o)),
        catchError((e) => of(getCategoriesFailure(e)))
      )
    )
  );

const changeSearchEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_SEARCH_FIELD),
    map((o) => o.payload.searchInput.trim("")),
    filter((o) => o !== ""),
    debounceTime(2000),
    map((o) => changeSearchSuccess(o))
  );

const changeSearchIconEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_SEARCHICON_VALUE),
    map((o) => o.payload.searchIconValue.trim("")),
    filter((o) => o !== ""),
    map((o) => changeSearchSuccess(o))
  );

const changeCategoryEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_CATEGORY_ID),
    map((o) => o.payload),
    map((o) => changeCategorySuccess(o))
  );

const changeCartStateEpic = (action$) =>
  action$.pipe(
    ofType(CHANGE_CART_STATE),
    map((o) => o.payload.CountInput),
    map((o) => changeCountSucces(o))
  );

const getCatalogEpic = (action$) =>
  action$.pipe(
    ofType(GET_CATALOG_REQUEST),
    map((o) => o.payload.catalog),
    map(
      (o) =>
        new URLSearchParams({
          categoryId: o.category,
          offset: o.offset,
          q: o.q,
        })
    ),
    switchMap((o) =>
      ajax.getJSON(`http://localhost:7070/api/items?${o}`).pipe(
        retry(3),
        map((o) => getCatalogSuccess(o)),
        catchError((e) => of(getCatalogFailure(e)))
      )
    )
  );

const postOrderEpic = (action$) =>
  action$.pipe(
    ofType(POST_ORDER_REQUEST),
    map((o) => o.payload.order),
    tap((o) => {
      console.log(o);
    }),
    switchMap((o) =>
      ajax({
        url: "http://localhost:7070/api/order",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          owner: o.owner,
          items: o.items,
        },
      }).pipe(
        map((o) => postOrderSuccess(o.status)),
        catchError((e) => of(postOrderFailure(e)))
      )
    )
  );

const postOrderStatus = (action$) =>
  action$.pipe(
    ofType(POST_ORDER_SUCCESS),
    map((o) => o.payload),
    tap((o) => {
      console.log("epic", o);
    })
  );

const getGoodEpic = (action$) =>
  action$.pipe(
    ofType(GET_GOOD_REQUEST),
    map((o) => o.payload.id),
    switchMap((o) =>
      ajax.getJSON(`http://localhost:7070/api/items/${o}`).pipe(
        retry(3),
        map((o) => getGoodSuccess(o)),
        catchError((e) => of(postOrderFailure(e)))
      )
    )
  );

export {
  getHitsEpic,
  getCategoriesEpic,
  getCatalogEpic,
  changeSearchEpic,
  getGoodEpic,
  changeCartStateEpic,
  changeCategoryEpic,
  postOrderEpic,
  postOrderStatus,
  changeSearchIconEpic,
};
