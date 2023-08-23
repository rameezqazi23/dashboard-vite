import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <main className="flex">
      <Sidebar />
      <div className="flex flex-col flex-1 relative">
        <Navbar />
      </div>

      
    </main>
  )
}

export default App
