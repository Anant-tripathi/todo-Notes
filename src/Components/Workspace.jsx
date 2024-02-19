import "./Workspace.css";
import Header from "./Header.jsx";
import Modal from "./Modal.jsx";
import Note from "./Note.jsx";
import ToDo from "./ToDo.jsx";
import { useState, useEffect } from "react";

export default function Workspace({ toDisplay }) {
  const [modal, setModal] = useState(false);
  const [selectedId, setSelectedId] = useState(1);
  const [combinedData, setCombinedData] = useState([]);
  const [newToDo, setNewToDo] = useState("");
  const [newNote, setNewNote] = useState("");
  let storedTodos = null,
    storedDetailedNotes;

  useEffect(() => {
    storedTodos = localStorage.getItem("todos");
    storedDetailedNotes = localStorage.getItem("detailedNotes");

    const todos = storedTodos ? JSON.parse(storedTodos) : [];
    const detailedNotes = storedDetailedNotes
      ? JSON.parse(storedDetailedNotes)
      : [];

    // Merge todo and detailedNotes data
    const combinedData = [...todos, ...detailedNotes];
    combinedData.sort((a, b) => {
      if (a.type === "todo" && b.type !== "todo") {
        return -1;
      } else if (a.type !== "todo" && b.type === "todo") {
        return 1;
      } else {
        return 0;
      }
    });

    setCombinedData(combinedData);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "detailedNotes",
      JSON.stringify(
        combinedData.filter((item) => item.type === "detailedNote"),
      ),
    );
  }, [combinedData]);

  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(combinedData.filter((item) => item.type === "todo")),
    );
  }, [combinedData]);

  const handleNewTodo = () => {
    const newTodo = {
      type: "todo",
      id: combinedData.filter((item) => item.type === "todo").length, // Ensure unique ID for todo items
      isChecked: false,
      content:
        "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
    };
    setCombinedData((prevCombinedData) => {
      const updatedData = [...prevCombinedData, newTodo];
      localStorage.setItem(
        "todos",
        JSON.stringify(updatedData.filter((item) => item.type === "todo")),
      );
      return updatedData;
    });
  };

  const handleNewNote = () => {
    const newNote = {
      type: "detailedNote",
      id: combinedData.filter((item) => item.type === "detailedNote").length, // Ensure unique ID for detailed notes
      title: "",
      brief: "",
      details: " ",
    };
    setCombinedData((prevCombinedData) => {
      const updatedData = [...prevCombinedData, newNote];
      localStorage.setItem(
        "detailedNotes",
        JSON.stringify(
          updatedData.filter((item) => item.type === "detailedNote"),
        ),
      );
      return updatedData;
    });

    setSelectedId(combinedData.length); // Adjust as needed
    setModal(!modal); // Adjust as needed
  };

  /*const [newNote, setNewNote] = useState({
    type: "detailedNote",
    id: combinedData.length,
    title: "",
    brief: "",
    details: " ",
  });*/

  const filteredData = combinedData.filter((item) => {
    if (toDisplay === "todo") return item.type === "todo";
    else if (toDisplay === "notes") return item.type === "detailedNote";
    return item;
  });

  // useEffect(() => {
  //   try {
  //     localStorage.setItem("detailedNote", JSON.stringify(combinedData));
  //   } catch (error) {
  //     console.error("Error saving data to local storage:", error);
  //   }
  // }, [combinedData]);

  const handleNoteTitleUpdate = (id, updatedTitle) => {
    setCombinedData((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) return { ...note, title: updatedTitle };
        return note;
      });
    });
  };

  const handleNoteBriefUpdate = (id, updatedBrief) => {
    setCombinedData((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) return { ...note, brief: updatedBrief };
        return note;
      });
    });
  };

  const handleNoteDetailsUpdate = (id, updatedDetails) => {
    setCombinedData((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) return { ...note, details: updatedDetails };
        return note;
      });
    });
  };

  //BUG the error which was removed using max-height where the vertical
  //spacing was odd due to textarea
  //BUG there is still some excess scrolling in textarea fields
  //TODO add a floating error to indicate character  limit reached
  //TODO two text boxes side by side at top with one side for new
  //todo and other for detailed notes. both are adjacent and when clicked it
  //expands to take up the full space covering the other

  const handleSelection = (id) => {
    setSelectedId(id);
    setModal(!modal);
  };

  const [selectedNewToDo, setSelectedNewToDo] = useState(false);
  const [selectedNewNote, setSelectedNewNote] = useState(false);

  const handleNewSelection = (opt) => {
    if (opt === "Note") {
      setSelectedNewNote(true);
      setSelectedNewToDo(false);
    } else if (opt === "todo") {
      setSelectedNewNote(false);
      setSelectedNewToDo(true);
    } else {
      setSelectedNewNote(false);
      setSelectedNewToDo(false);
    }
  };

  return (
    <>
      {modal ? (
        <Modal
          id={filteredData[selectedId].id}
          title={filteredData[selectedId].title}
          brief={filteredData[selectedId].brief}
          details={filteredData[selectedId].details}
          handleNoteTitleUpdate={handleNoteTitleUpdate}
          handleNoteBriefUpdate={handleNoteBriefUpdate}
          handleNoteDetailsUpdate={handleNoteDetailsUpdate}
          modal={modal}
          setModal={setModal}
        />
      ) : (
        <div className="workspace">
          <Header />
          <div className="insert">
            <input
              type="text"
              value={newToDo}
              onClick={() => handleNewSelection("todo")}
              onBlur={() => handleNewSelection("none")}
              onChange={(e) => setNewToDo(e.target.value)}
              placeholder="New ToDo..."
              className={`insertNewToDo ${selectedNewNote === true ? "hidden" : ""}`}
            />
            <input
              type="text"
              value={newNote}
              onClick={() => handleNewSelection("Note")}
              onBlur={() => handleNewSelection("none")}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="New note..."
              className={`insertNewNote ${selectedNewToDo === true ? "hidden" : ""}`}
            />
          </div>

          <button className="add" onClick={handleNewNote}>
            Add detailed note
          </button>
          <button className="addToDo" onClick={handleNewTodo}>
            Add a ToDo
          </button>

          {filteredData.map((item) => {
            if (item.type === "todo") {
              return (
                <ToDo
                  id={item.id}
                  isChecked={item.isChecked}
                  content={item.content}
                  setCombinedData={setCombinedData}
                />
              );
            } else if (item.type === "detailedNote") {
              console.log(item);
              return (
                <Note
                  id={item.id}
                  title={item.title}
                  brief={item.brief}
                  details={item.details}
                  handleNoteTitleUpdate={handleNoteTitleUpdate}
                  handleNoteBriefUpdate={handleNoteBriefUpdate}
                  handleSelection={handleSelection}
                />
              );
            }
            return null; // In case there's an unknown type
          })}
        </div>
      )}
    </>
  );
}
