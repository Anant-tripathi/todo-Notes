export default function Note({
  id,
  title,
  brief,
  details,
  handleNoteTitleUpdate,
  handleNoteBriefUpdate,
  handleSelection,
}) {
  return (
    <form
      className="note-detailed"
      key={id}
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="text"
        className="note-title"
        maxLength={50}
        value={title}
        placeholder="Some heading"
        onChange={(e) => handleNoteTitleUpdate(id, e.target.value)}
      />
      <input
        type="text"
        className="note-brief"
        maxLength={100}
        value={brief}
        placeholder="Some sub-heading"
        onChange={(e) => handleNoteBriefUpdate(id, e.target.value)}
      />
      <textarea
        type="text"
        className="note-details"
        value={details}
        placeholder="Note details"
        onClick={() => handleSelection(id)}
        onChange={() => handleSelection(id)}
      />
    </form>
  );
}
