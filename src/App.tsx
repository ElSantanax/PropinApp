import MenuItems from "./components/MenuItems"
import OrderContent from "./components/OrderContent";
import OrdenTotals from "./components/OrdenTotals";
import TipPercentageForm from "./components/TipPercentageForm";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"
import { useReducer } from "react";
import { initialState, orderReducer } from "./reducers/order-reducers";

function App() {

  const { order, addItem, removeItem, tip, setTip, placeOrder } = useOrder(); // Invocar el hook correctamente
  const [state, dispatch] = useReducer(orderReducer, initialState)

  return (
    <>
      <header className="bg-teal-400 py-5">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div></div>
        <h1 className="text-center text-4xl font-black text-white"> Calculadora de propina y consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-7">
        <div className="p-5 bg-white border border-dashed border-teal-400 rounded-lg">
          <h2 className="mb-8 font-black text-2xl">Menú</h2>
          <div className="space-y-3">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                dispatch={dispatch}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-teal-400 bg-white p-5 rounded-lg space-y-10">

          {state.order.length > 0 ? (
            <>
              <div>
                <OrderContent
                  order={state.order}
                  removeItem={removeItem}
                />

                <TipPercentageForm
                  setTip={setTip}
                  tip={tip}
                />

                <OrdenTotals
                  order={order}
                  tip={tip}
                  placeOrder={placeOrder}
                />
              </div>
            </>
          ) : (
            <p className="text-center mb-5">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  )
}

export default App
