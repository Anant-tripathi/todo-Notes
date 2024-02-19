import "./Modal.css";

export default function Modal({
  id,
  title,
  brief,
  details,
  handleNoteTitleUpdate,
  handleNoteBriefUpdate,
  handleNoteDetailsUpdate,
  modal,
  setModal,
}) {
  return (
    <div className="container">
      <div className="modal">
        <h1>Edit Detailed Note</h1>
        <form
          className="note-detailed-modal"
          key={id}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="detailed-note-title-modal note-body-detailed"
            maxLength={50}
            value={title}
            placeholder="Some heading"
            onChange={(e) => handleNoteTitleUpdate(id, e.target.value)}
          />
          <input
            type="text"
            className="detailed-note-brief-modal note-body-detailed"
            maxLength={100}
            value={brief}
            placeholder="Some sub-heading"
            onChange={(e) => handleNoteBriefUpdate(id, e.target.value)}
          />
          <input
            type="text"
            className="detailed-note-body-modal"
            value={details}
            placeholder="Note details"
            maxLength={10000}
            onChange={(e) => handleNoteDetailsUpdate(id, e.target.value)}
          />
        </form>
        <button className="close" onClick={() => setModal(!modal)}>
          X
        </button>
      </div>
    </div>
  );
}
