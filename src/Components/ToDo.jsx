import "./ToDo.css";

export default function ToDo({ id, isChecked, content, setCombinedData }) {
  const handleToDoUpdate = (id, updatedContent) => {
    setCombinedData((prevtodos) => {
      return prevtodos.map((todo) => {
        if (todo.id === id) return { ...todo, content: updatedContent };
        return todo;
      });
    });
  };
  const handleCheckboxUpdate = (id) => {
    setCombinedData((prevtodos) => {
      return prevtodos.map((todo) => {
        if (todo.id === id) return { ...todo, isChecked: !todo.isChecked };
        return todo;
      });
    });
  };
  return (
    <form className="todo-item" key={id} onSubmit={(e) => e.preventDefault()}>
      <input
        type="checkbox"
        className="input"
        checked={isChecked}
        onChange={() => handleCheckboxUpdate(id)}
      />
      <input
        type="text"
        className="todo-body"
        maxLength={250}
        value={content}
        onChange={(e) => handleToDoUpdate(id, e.target.value)}
      />
    </form>
  );
}
