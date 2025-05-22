import "./Todo.css";    


function Todo({ title, onTodoDelete }) {
  function deleteTodo() {
    console.log('deleteTodo()', title.toUpperCase());
  }



    return(
        <div className="todo">
        <p>{ title }</p>
        <button onClick={onTodoDelete}>Entomb</button>
      </div>
    )

}

export default Todo;