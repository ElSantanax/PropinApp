import { OrderItem } from "../types"

type OrderContentPromps = {
    order: OrderItem[]
}
export default function OrderContent({ order }: OrderContentPromps) {
    return (
        <div>
            <h2 className="font-black text-2xl mb-8"> Consumo</h2>

            <div className=" space-y-3 mt-5">
                {order.length === 0 ?
                    <p className="text-center">La orden esta vacia</p>
                    :
                    (
                        order.map(item =>
                            <div key={item.id}>
                                <p>{item.name}</p>
                            </div>
                        )
                    )
                }
            </div>
        </div >
    )
}
