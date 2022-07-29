import { Box, Typography } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch }) => {
  console.log(todos);
  return (
    <Box sx={{ width: "50%" }}>
      {todos.length ? (
        todos.map((todo) => (
          <TodoItem dispatch={dispatch} key={todo.id} todo={todo} />
        ))
      ) : (
        <Typography variant="h5">No todos to display</Typography>
      )}
    </Box>
  );
};

export default TodoList;
