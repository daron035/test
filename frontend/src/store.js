import rootReducer from "./store/reducers";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: rootReducer,
});

//
//
//
// documentation "Modern Redux with Redux Toolkit"
// import todosReducer from "./features/todos/todosSlice";
// import filtersReducer from "./features/todos/filtersSlice";
// const store = configureStore({
//   reducer: {
//     todos: todosReducer,
//     filters: filtersReducer,
//   },
// });
//
//
//
//
// toolkit "Red youtube"
// import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { reducer } from './example/expample.slice'
//
// const reducers = combineReducers(reducer);
//
// export const store = configureStore({
//   reducer: reducers,
// });
