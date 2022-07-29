export const todosReducer = (state, action) => {
  switch (action.type) {
    case "GET_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [action.payload, ...state];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    default:
      return state;
  }
};
