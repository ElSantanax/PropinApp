import { MenuItem, OrderItem } from "../types";

export type OrderActions =
    { type: 'add-item', payload: { item: MenuItem } } |
    { type: 'remove-item', payload: { id: MenuItem["id"] } } |
    { type: 'place-older' } |
    { type: 'set-tip', payload: { value: number } }

export type OrderState = {
    order: OrderItem[]
    tip: number
}

export const initialState: OrderState = {
    order: [],
    tip: 0,
}

export const orderReducer = (
    state: OrderState = initialState,
    action: OrderActions
) => {

    if (action.type === 'add-item') {
        // Logíca
        const itemExist = state.order.find(orderItem => orderItem.id === action.payload.item.id)

        let updateOrder: OrderItem[] = []

        if (itemExist) {
            updateOrder = state.order.map(orderItem => orderItem.id === action.payload.item.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem)
        } else {
            const newItem = { ...action.payload.item, quantity: 1 }
            updateOrder = [...state.order, newItem]
            return {
                ...state,
                updateOrder
            }
        }

        if (action.type === 'remove-item') {
            // Logíca

            return {
                ...state
            }
        }

        if (action.type === 'place-older') {
            // Logíca

            return {
                ...state
            }
        }

        if (action.type === 'set-tip') {
            // Logíca

            return {
                ...state
            }
        }

        return state
    }
}