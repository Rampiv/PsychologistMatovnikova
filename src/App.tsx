import { Route, Routes } from "react-router"
import "./App.scss"

export default function App() {
  return (
    <div className="App">
      <main className="main">
        <div className="container">
          <Routes>
            <Route path={"/"} element={<></>} />
          </Routes>
        </div>
      </main>
    </div>
  )
}
