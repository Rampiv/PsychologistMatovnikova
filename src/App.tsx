import { Route, Routes } from "react-router"
import "./App.scss"
import { MainPage } from "./pages"
import { Header } from "./components"

export default function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Routes>
          <Route path={"/"} element={<MainPage />} />
        </Routes>
      </main>
    </div>
  )
}
