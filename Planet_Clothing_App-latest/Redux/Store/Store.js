import { combineReducers,createStore } from "redux";
import {configureStore} from '@reduxjs/toolkit'
import reducer from "../Reducers/Reducers";

// const store = configureStore(reducer);
const store = createStore(reducer)

export default store;
