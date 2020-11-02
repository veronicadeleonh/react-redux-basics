import { createSlice } from "react-redux"

export const cartSlice = createSlice ({
    name: "cart",
    initialState: {
        itemCount: 0,
        items: {},
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items[action.payload.menuId];
            if (item === undefined) {
                state.items[action.payload.menuId] = {
                    menuId: action.payload.menuId,
                    qty: 1,
                }
            } else {
                item.qty++
            }
            state.itemCount++
        },
        removeItem: (state, action) => {
            const item = state.item[action.payload.menuId]
            if (item === undefined) return;
            item.qty === 1 ? delete state.items[action.payload.menuId] : item.qty--;
            state.itemCount--
        }
    }
})

export const { addItem, removeItem } = cartSlice.action

export const selectCartItems = (state) => state.cart.items;
export const selectCartCount = (state) => state.cart.itemCount

export default cartSlice.reducer