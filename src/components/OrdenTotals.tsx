import { useMemo } from "react"
import { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {
    order: OrderItem[],
    tip: number
}

export default function OrdenTotals({ order, tip }: OrderTotalProps) {

    const subtotalAmound = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order])
    const tipAmount = useMemo(() => subtotalAmound * tip, [tip, order])

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
                    <span className="font-bold">$0</span>
                </p>
            </div>

            <button
                className=""
            >

            </button>

        </>
    )
}
