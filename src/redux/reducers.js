import { combineReducers } from "redux";
import cart from "./slices/cartSlice";

const reducers = combineReducers({
    cart,
});

export default reducers;