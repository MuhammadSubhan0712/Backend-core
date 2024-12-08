import { useState, useRef, useEffect } from "react";
import "./App.css";
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import axios from "axios";
function App() {
  const [todo, setTodo] = useState([]);
  const title = useRef();
  const description = useRef();

  // Get All Data
  useEffect(() => {
    const getdata = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api/v1/todos");
        setTodo(res.data.todo || []);
        console.log(res.data.todo);
      } catch (error) {
        console.log("Error getting data ==>", error);
      }
    };
    getdata();
  }, []);

  // Add a new todo
  const addTodo = async (event) => {
    event.preventDefault();
    if (title.current.value === "" || description.current.value === "") {
      alert("You must fill all input fields");
      return;
    }
    try {
      const res = await axios.post("http://localhost:3000/api/v1/todo",{
      title: title.current.value,
      description: description.current.value ,
    });
      alert("Todo added successfully in database");
      console.log("Todo added successfully ", res.data.todo);
      setTodo([...todo, res.data.todo]);
      title.current.value = "";
      description.current.value = "";
    } catch (error) {
      console.log("Error adding todo:", error);
    }
  };

  // Edit an existing todo
  const EditTodo = async (item, id) => {
    const editTitle = prompt("Enter Title", item.title);
    const editdescription = prompt("Enter Title", item.description);
  
    if (!editTitle || !editdescription) {
      alert("You must edit both fields");
      return;
    }
    const UpdTodo = {
      title: editTitle,
      description: editdescription,
    };
    try {
      const editTodo = await axios.put(
        `http://localhost:3000/api/v1/todo/${id}` ,UpdTodo
      );
      console.log("Editing todo ", editTodo.data);
      alert("Todo edit successfully");
      const res = await axios.get("http://localhost:3000/api/v1/todos");
      setTodo(res.data.todo || []);
    } catch (error) {
      console.log("Error Occured", error);
      alert("Error Occured", error);
    }
  };

  // Delete a todo
  const DeletTodo = async (id) => {
    try {
      const deletetodo = await axios.delete(
        `http://localhost:3000/api/v1/todo/${id}`
      );
      console.log("Todo deleted successfully:", deletetodo.data);
      alert("Todo deleted successfully");
      const res = await axios.get("http://localhost:3000/api/v1/todos");
      setTodo(res.data.todo || []);
    } catch (error) {
      console.log("Error deleting todo:", error);
      alert("Error deleting todo:", error);
    }
  };

  return (
    <>
    <div>
      <div
        className="container my-5 p-5 rounded shadow-lg"
        style={{
          background: "linear-gradient(135deg, #6a11cb, #2575fc)",
          color: "#fff",
        }}
      >
        <h2 className="text-center mb-4">
          <LuListTodo className="me-2" />
          Todo List
        </h2>

        {/* Todo form */}
        <form className="row g-2 mb-4" onSubmit={addTodo}>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Todo Title"
              ref={title}
            />
          </div>
          <div className="col-md-5">
            <input
              type="text"
              className="form-control"
              placeholder="Todo Description"
              ref={description}
            />
          </div>
          <div className="col-md-2">
            <button className="btn btn-light w-100" type="submit">
              Add <FaPlusCircle />
            </button>
          </div>
        </form>

        {/* Todo List */}
        <ul className="list-group">
          {todo && todo.length > 0 ? (
            todo.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center mb-2"
                style={{
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "#fff",
                }}
              >
                <span>
                  <strong>{item.title}</strong>: {item.description}
                </span>
                <div>
                  <button
                    onClick={() => EditTodo(item, item._id)}
                    className="btn btn-outline-warning btn-sm me-2"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => DeletTodo(item._id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    <FaTrashAlt />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className="bg-dark p-2 mt-5 border rounded text-center text-info">
              <h4>No Todos Found</h4>
            </div>
          )}
        </ul>
      </div>
    </div>
  </>
)
}
export default App
