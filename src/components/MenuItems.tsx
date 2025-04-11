import { MenuItem } from "../types"

type MenuItemsPromps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

export default function MenuItems({ item, addItem }: MenuItemsPromps) {
    return (
        <button
            className="border border-teal-400 hover:bg-teal-400 hover:text-white rounded-lg w-full p-3 flex justify-between"
            onClick={() => addItem(item)}
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
