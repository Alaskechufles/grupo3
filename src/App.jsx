import { useState } from "react"
import Card from "./components/Card"


function App() {
  const [variable, setVariable] = useState(0)
  const [name, setName] = useState("Diego")
  const [isOpen, setIsOpen] = useState(true)

  const [list, setList] = useState(["fresa"])
  const [person, setPerson] = useState({
    name: "Marco",
    age: 24
  })
  function sumarUno() {
    setVariable(variable + 1)
    setName("Andres")
    setIsOpen(false)
    setList(["fresa", "manzana"])
    setPerson({
      name: "Daniel",
      age: 45
    })
  }
  function restarUno() {
    setVariable(variable - 1)
    setName("Huarsaya")
    setIsOpen(true)
    setList(["Pera"])
    setPerson({
      name: "Domingo",
      age: 12
    })

  }


  return (
    <>
      <h1 className="text-5xl font-bold text-red-500">Welcome to My App</h1>
      <p>{name}</p>
      <hr />
      <p>{variable}</p>
      <button className=" border" onClick={() => sumarUno()}>+1</button>
      <button className=" border" onClick={() => restarUno()}>-1</button>
      <hr />
      <p>{list}</p>
      <hr />
      <p>{person.name} - {person.age}</p>
      <hr />
      {isOpen ?
        <Card product="bread" quantity={1} />
        :
        (
          <Card product="Milk" quantity={3} />
        )
      }

    </>
  )
}

export default App
