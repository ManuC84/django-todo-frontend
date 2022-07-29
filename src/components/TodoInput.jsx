import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import { addTodo } from "../services/api";

const TodoInput = ({ dispatch }) => {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      return;
    }
    addTodo({
      title: value,
      completed: false,
    }).then((todo) => {
      dispatch({
        type: "ADD_TODO",
        payload: todo,
      });
    });

    setValue("");
  };

  return (
    <Box sx={{ m: 3 }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          sx={{ backgroundColor: "white" }}
          type="text"
          value={value}
          onChange={handleChange}
        />
        <Button
          color="secondary"
          sx={{ mt: 1 }}
          variant="contained"
          type="submit"
        >
          Add Todo
        </Button>
      </form>
    </Box>
  );
};

export default TodoInput;
