import MenuItems from "./components/MenuItems"
import OrderContent from "./components/OrderContent";
import OrdenTotals from "./components/OrdenTotals";
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { order, addItem, removeItem } = useOrder(); // Invocar el hook correctamente

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black text-white"> Calculadora de propina y consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2 gap-7">
        <div className="p-5">
          <h2 className="mb-8 font-black text-2xl">Menú</h2>
          <div className="space-y-3">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="border border-dashed border-teal-400 p-5 rounded-lg space-y-10">
          <div>
            <OrderContent
              order={order}
              removeItem={removeItem}
            />

            <OrdenTotals
              order={order}
            />
          </div>

        </div>

      </main>

    </>
  )
}

export default App
