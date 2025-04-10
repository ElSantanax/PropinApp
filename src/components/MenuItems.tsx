import { MenuItem } from "../types"

type MenuItemsPromps = {
    item: MenuItem
}

export default function MenuItems({ item }: MenuItemsPromps) {
    return (
        <button
            className="border border-teal-400 hover:bg-teal-400 hover:text-white rounded-lg w-full p-3 flex justify-between"
        >
            <p>{item.name}</p>
            <p className="font-black">${item.price}</p>
        </button>
    )
}
