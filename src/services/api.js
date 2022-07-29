const apiUrl = process.env.REACT_APP_API_URL;

export function fetchTodos() {
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => data);
}

export function addTodo(todo) {
  return fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  })
    .then((response) => response.json())
    .then((data) => data);
}

export function deleteTodo(id) {
  return fetch(`${apiUrl}${id}/`, {
    method: "DELETE",
  });
}

export function toggleTodo(todo, completed) {
  return fetch(`${apiUrl}${todo.id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: todo.title, completed }),
  });
}
