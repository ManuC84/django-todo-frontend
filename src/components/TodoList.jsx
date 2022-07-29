import { Box, Typography } from "@mui/material";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, dispatch, loading, error }) => {
  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "50%",
        },
      }}
    >
      {loading && <Typography variant="h5">Loading...</Typography>}

      {error && <Typography variant="h5">Error...</Typography>}

      {!loading &&
        !error &&
        (!!todos.length ? (
          todos.map((todo) => (
            <TodoItem dispatch={dispatch} key={todo.id} todo={todo} />
          ))
        ) : (
          <Typography variant="h5">No todos to display</Typography>
        ))}
    </Box>
  );
};

export default TodoList;
