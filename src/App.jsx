import { Route, Routes } from "react-router"
import Home from "./pages/Home"
import MainLayout from "./layouts/MainLayout"
import About from "./pages/About"
import Contact from "./pages/Contact"
import DashboardLayout from "./layouts/DashboardLayout"
import Dashboard from "./pages/Dashboard"
import Users from "./components/Users"
import Settings from "./components/Settings"


function App() {


  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Route>
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/dashboard/users" element={<Users />}></Route>
          <Route path="/dashboard/settings" element={<Settings />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
