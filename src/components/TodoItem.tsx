import { Todo } from "./types";

interface TodoItemProps extends Todo {
  style?: React.CSSProperties;
  toggleTodo: (id: Todo["id"]) => void;
  removeTodo: (id: Todo["id"]) => void;
}

const styles = {
  listItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "10px",
    margin: "5px 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    backgroundColor: "#f9f9f9",
  },
  title: {
    flex: 1,
    marginLeft: "10px",
    textDecoration: "line-through",
    color: "#888",
  },
  titleActive: {
    flex: 1,
    marginLeft: "10px",
    textDecoration: "none",
    color: "#333",
  },
  removeButton: {
    color: "#ff4d4d",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

const TodoItem = ({
  id,
  title,
  completed,
  style = {},
  toggleTodo,
  removeTodo,
}: TodoItemProps) => {
  return (
    <li style={{ ...styles.listItem, ...style }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleTodo(id)}
      />
      <span style={completed ? styles.title : styles.titleActive}>{title}</span>
      <span style={styles.removeButton} onClick={() => removeTodo(id)}>
        &times;
      </span>
    </li>
  );
};

export default TodoItem;
