import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducers"

type OrderContentProps = {
    order: OrderItem[],
    dispatch: React.Dispatch<OrderActions>

}
export default function OrderContent({ order, dispatch }: OrderContentProps) {
    return (
        <div>
            <h2 className="font-black text-2xl mb-8">Consumo</h2>

            <div className="space-y-3 mt-5">
                {order.map(item =>
                    <div
                        key={item.id}
                        className="flex justify-between border-t border-teal-300 last-of-type:border-b py-3 items-center"
                    >
                        <div>
                            <p>{item.name} - {formatCurrency(item.price)}</p>
                            <p className="font-black"> Cantidad {item.quantity} -  {formatCurrency(item.price * item.quantity)}</p>
                        </div>
                        <button
                            className="bg-teal-400 font-black h-8 w-8 rounded-full text-white"
                            onClick={() => dispatch({ type: 'remove-item', payload: item })}
                        >
                            X
                        </button>

                    </div>
                )}
            </div>
        </div >
    )
}
