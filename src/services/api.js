export function fetchTodos() {
  return fetch("http://localhost:8000/api/")
    .then((response) => response.json())
    .then((data) => data);
}

export function addTodo(todo) {
  return fetch("http://localhost:8000/api/", {
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
  return fetch(`http://localhost:8000/api/${id}/`, {
    method: "DELETE",
  });
}

export function toggleTodo(todo, completed) {
  return fetch(`http://localhost:8000/api/${todo.id}/`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title: todo.title, completed }),
  });
}
