function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                padding: "12px",
                margin: "5px 0",
                background: todo.done
                    ? "#f0fff0"
                    : "#fff",
                border: "1px solid #eee",
                borderRadius: "4px",
            }}
        >
            <input
                type="checkbox"
                checked={todo.done}
                onChange={() => onToggle(todo.id)}
            />

            <span
                style={{
                    flex: 1,
                    marginLeft: "10px",
                    textDecoration: todo.done
                        ? "line-through"
                        : "none",
                }}
            >
                {todo.text}
            </span>

            <button
                onClick={() =>
                    onDelete(todo.id)
                }
            >
                🗑
            </button>
        </div>
    );
}

export default TodoItem;