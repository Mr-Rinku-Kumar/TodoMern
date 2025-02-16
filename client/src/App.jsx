import { useEffect, useState } from "react"
import ToDo from "./components/ToDo"
import axios from "axios"
import { baseURL } from "./utils/constant"
import Popup from "./components/Popup"

function App() {

  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')
  const [updateUi, setUpdateUi] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [popupContent, setPopupContent] = useState({})

  useEffect(() => {
    axios.get(`${baseURL}/get`)
      .then((res) => setTodos(res.data)).catch((err) => console.log(err))
  }, [updateUi])

  const saveToDos = () => {
    axios.post(`${baseURL}/save`, { todo: input }).then((res) => {
      console.log(res.data)
      setUpdateUi((prevState) => !prevState)
      setInput("")
    })
      .catch((err) => console.log(err))
  }

  return (
    <main>
      <div className="container">
        <h1 className="title">ToDo App</h1>
        <div className="input_holder">
          <input value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder="Add a ToDo....." />
          <button onClick={saveToDos}>Add</button>
        </div>
        <div className="list">
          {todos.map(el => <ToDo key={el._id} text={el.todo} id={el._id} setUpdateUi={setUpdateUi} setShowPopup={setShowPopup} setPopupContent={setPopupContent} />)}
        </div>
      </div>
      {showPopup && <Popup setShowPopup={setShowPopup} popupContent={popupContent} setUpdateUi={setUpdateUi} />}
    </main>
  )
}

export default App
