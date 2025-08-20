import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"


function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
