import { Typography } from "@mui/material";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { todosReducer } from "./reducers/todosReducer";
import { fetchTodos } from "./services/api";

function App() {
  const [state, dispatch] = useReducer(todosReducer, []);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetchTodos()
      .then((todos) => dispatch({ type: "GET_TODOS", payload: todos }))
      .then(() => setLoading(false))
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <Typography variant="h3">Todo app</Typography>
      <TodoInput dispatch={dispatch} />
      <TodoList
        dispatch={dispatch}
        todos={state}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
