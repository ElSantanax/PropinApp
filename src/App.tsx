import MenuItems from "./components/MenuItems"
import { menuItems } from "./data/db"
import useOrder from "./hooks/useOrder"

function App() {

  const { addItem } = useOrder(); // Invocar el hook correctamente

  return (
    <>
      <header className=" bg-teal-400 py-5">
        <h1 className=" text-center text-4xl font-black text-white"> Calculadora de propina y consumos</h1>
      </header>

      <main className=" max-w-7xl mx-auto py-20 grid md:grid-cols-2">
        <div>
          <h2 className=" mb-8 font-black text-2xl">Menú</h2>
          <div className=" space-y-3">
            {menuItems.map(item => (
              <MenuItems
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="mb-5 font-black text-2xl">
          <h2>Consumo</h2>
        </div>
      </main>

    </>
  )
}

export default App
