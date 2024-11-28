import { useState, useRef } from "react";
import "./App.css"
import { FaEdit, FaTrashAlt, FaPlusCircle } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import axios from "axios";
function App() {
  const [todo, setTodo] = useState([]);
  const title = useRef();
  const description = useRef();

  // Add a new todo
  const addTodo = async(event) => {
    event.preventDefault();

    try {
    await axios.post("http://localhost:3000/api/v1/todo")
    .then(res =>{
    console.log(res.data);
    })
    .catch(error => {
      console.log(error);
    })
    } catch (error) {
      console.log(error);
    }
    
   

    if (title.current.value === "" || description.current.value === "") {
      alert("You must fill all input fields");
    } 
    else {
      setTodo([...todo, title.current.value , description.current.value]);
      title.current.value = "";
    }
  };

  // Edit an existing todo
  const EditTodo = (index) => {
    const editVal = prompt("Enter Updated Value", todo[index]);
    if (editVal) {
      todo.splice(index, 1, editVal);
      setTodo([...todo]);
    }
  };

  // Delete a todo
  const DeletTodo = (index) => {
    todo.splice(index, 1);
    setTodo([...todo]);
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
      <form className="d-flex gap-2 mb-4" onSubmit={addTodo}>
        <input
          type="text"
          className="form-control"
          placeholder="Todo"
          ref={title}
        />

<input
          type="text"
          className="form-control"
          placeholder="Description"
          ref={description}
        />
        <button className="btn btn-light shadow-sm" type="submit">
          Add <FaPlusCircle />
        </button>
      </form>

      {/* Todo List */}
      <ul className="container list-group">
        {todo.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center mb-2 animate__animated animate__fadeIn"
            style={{
              background: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              color: "#fff",
            }}
          >
            {item}
            <div>
              <button
                onClick={() => EditTodo(index)}
                className="btn btn-outline-warning btn-sm me-2"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => DeletTodo(index)}
                className="btn btn-outline-danger btn-sm"
              >
                <FaTrashAlt />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </>
  );
}

export default App;
