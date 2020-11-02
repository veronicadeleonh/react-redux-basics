import { configureStore } from "react-redux"
import cartReducer from "./cartSlice"
import restoReducer from "./restoSlice"

export default configureStore({
    reducer: {
        cart: cartReducer,
        resto: restoReducer
    }
})