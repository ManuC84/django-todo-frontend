import { Typography } from "@mui/material";
import { useEffect, useReducer } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { todosReducer } from "./reducers/todosReducer";
import { fetchTodos } from "./services/api";

function App() {
  const [state, dispatch] = useReducer(todosReducer, []);

  useEffect(() => {
    fetchTodos().then((todos) =>
      dispatch({ type: "GET_TODOS", payload: todos })
    );
  }, []);

  return (
    <div className="App">
      <Typography variant="h3">Todo app</Typography>
      <TodoInput dispatch={dispatch} />
      <TodoList dispatch={dispatch} todos={state} />
    </div>
  );
}

export default App;
