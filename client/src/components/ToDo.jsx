import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { baseURL } from "../utils/constant";
const ToDo = ({ text, id, setUpdateUi, setShowPopup, setPopupContent }) => {


    const deleteTodos = () => {
        axios.delete(`${baseURL}/delete/${id}`)
            .then((res) => console.log(res.data));
        setUpdateUi((preState) => !preState)
    }


    const updateTodo = () => {
        setPopupContent({ text, id })
        setShowPopup(true)
    }

    return (
        <div className="toDo">
            {text}
            <div className="icons">
                <FaEdit onClick={updateTodo} />
                <ImCross onClick={deleteTodos} />
            </div>
        </div>

    )

}
export default ToDo