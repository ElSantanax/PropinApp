import { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducers"

type MenuItemsProps = {
    item: MenuItem,
    dispatch: React.Dispatch<OrderActions>
}

export default function MenuItems({ item, dispatch }: MenuItemsProps) {
    return (
        <button
            className="border border-teal-400 hover:bg-teal-400 hover:text-white rounded-lg w-full p-3 flex justify-between"
            onClick={() => dispatch({ type: 'add-item', payload: { item } })}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
