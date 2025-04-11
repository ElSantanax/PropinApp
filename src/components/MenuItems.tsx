import { MenuItem } from "../types"

type MenuItemsPromps = {
    item: MenuItem,
    addItem: () => void
}

export default function MenuItems({ item, addItem }: MenuItemsPromps) {
    return (
        <button
            className="border border-teal-400 hover:bg-teal-400 hover:text-white rounded-lg w-full p-3 flex justify-between"
            onClick={() => addItem()}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
