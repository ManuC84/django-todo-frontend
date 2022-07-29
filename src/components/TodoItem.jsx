import { Box, Card, Checkbox, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { deleteTodo, toggleTodo } from "../services/api";

const TodoItem = ({ todo, dispatch }) => {
  const [checked, setChecked] = useState(todo.completed);

  useEffect(() => {
    toggleTodo(todo, checked).then((todo) => {
      dispatch({
        type: "TOGGLE_TODO",
        payload: todo,
      });
    });
  }, [checked, todo, dispatch]);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleDelete = (todoId) => {
    deleteTodo(todoId).then(() => {
      dispatch({
        type: "REMOVE_TODO",
        payload: todoId,
      });
    });
  };

  return (
    <Card
      sx={{
        mt: 3,
        display: "flex",
        justifyContent: "space-between",
        p: 2,
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Typography
        sx={{ maxWidth: { md: "50%" }, overflowWrap: "break-word" }}
        variant="body1"
      >
        <p>{todo.title}</p>
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          justifyContent: {
            xs: "center",
            md: "flex-end",
          },
        }}
      >
        <Typography variant="caption">Completed</Typography>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
        <Button
          color="primary"
          onClick={() => handleDelete(todo.id)}
          variant="contained"
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default TodoItem;
