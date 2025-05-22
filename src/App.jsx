import logo from "./logo.svg";
import "./App.css";
import Todo from "./components/Todo.jsx";
import Title from "./components/Title.jsx";
import Modal from "./components/Modal.jsx";
import { useState, useEffect, use } from "react";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  } // console.log("deleteTodo()");

  function cancelModal() {
    setShowModal(false);
  }
  function confirmModal() {
    setShowModal(false);
  }


  useEffect(() => {
    console.log('ONLY on mount');
  
  }, [])

  useEffect(() => {

console.log(`on mount AND on ${showModal} change`);

  }, [showModal]);




  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Engrave</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish Frontend Simplified" />
        <Todo
          onTodoDelete={onTodoDelete}
          title="Finish The Interview Section"
        />
        <Todo onTodoDelete={onTodoDelete} title="Land a $100k job" />
      </div>

      {showModal && (
        <Modal
          cancelModal={cancelModal}
          confirmModal={confirmModal}
          className="Confirm"
        />
      )}
    </div>
  );
}

export default App;
