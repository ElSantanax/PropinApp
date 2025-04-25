import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"
import { OrderActions } from "../reducers/order-reducers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number,
    dispatch: React.Dispatch<OrderActions>
}

export default function OrdenTotals({ order, tip, dispatch }: OrderTotalProps) {

    const subtotalAmound = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subtotalAmound * tip, [tip, order])
    const totalAmount = useMemo(() => subtotalAmound + tipAmount, [tip, order])

    return (
        <>
            <div className="space-y-3 mt-5">
                <h2 className="font-black text-2xl">Totales y Propinas</h2>
                <p className="m-0">Subtotal a pagar: {''}
                    <span className="font-bold">{formatCurrency(subtotalAmound)}</span>
                </p>
                <p className="m-0">Propina: {''}
                    <span className="font-bold">{formatCurrency(tipAmount)}</span>
                </p>
                <p className="m-0">Total a pagar: {''}
                    <span className="font-bold">{formatCurrency(totalAmount)}</span>
                </p>
            </div>

            <button
                className="w-full bg-black p-3 uppercase font-black text-white mt-10 disabled:opacity-10"
                disabled={totalAmount === 0}
                onClick={() => dispatch({ type: 'place-order' })}
            >
                Guardar Orden
            </button>

        </>
    )
}
