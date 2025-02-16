const ToDoModels = require("../models/ToDoModel")

module.exports.getTodos = async (req, res) => {
    const todos = await ToDoModels.find()
    res.send(todos)
}

module.exports.saveTodos = (req, res) => {
    const { todo } = req.body
    ToDoModels.create({ todo })
        .then(data => {
            console.log("Saved Successfully")
            res.status(201).send(data)
        })
        .catch((err) => console.log(err))
}

module.exports.updateTodos = (req, res) => {
    const { id } = req.params
    const { todo } = req.body
    ToDoModels.findByIdAndUpdate(id, { todo }).then(() => {
        res.send("Updated Successfully")
    })
        .catch((err) => console.log(err))

}

module.exports.deleteTodos = (req, res) => {
    const { id } = req.params
    ToDoModels.findByIdAndDelete(id).then(() => {
        res.send("Deleted Successfully")
    })
}