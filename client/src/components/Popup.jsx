import axios from "axios";
import { useState } from "react";
import { ImCross } from "react-icons/im";
import { baseURL } from "../utils/constant";


const Popup = ({ setShowPopup, popupContent, setUpdateUi }) => {

    const [input, setInput,] = useState(popupContent.text)


    const updateToDo = () => {
        axios.put(`${baseURL}/update/${popupContent.id}`, { todo: input })
            .then((res) => console.log(res.data))
        setUpdateUi((preState) => !preState)
        setShowPopup(false)
    }

    return (
        <div className="backdrop">
            <div className="popup">
                <ImCross className="cross" onClick={() => { setShowPopup(false) }} />
                <h1>Update ToDo</h1>
                <div className="popup__input_holder">
                    <input
                        type="text"
                        onChange={(e) => setInput(e.target.value)}
                        value={input}
                        placeholder="Update Your ToDo"
                    />
                    <button onClick={updateToDo}>Update</button>
                </div>
            </div>
        </div>
    )
}
export default Popup