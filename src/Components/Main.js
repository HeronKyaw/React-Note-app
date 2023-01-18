import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Preview from "./Preview";

function Main({ activeNote, onUpdateNote }) {
  const onEditField = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      lastModified: Date.now(),
    });
  };

  if (!activeNote)
    return (
      <div className="no-active-note">
        Please select your idea or create one.
      </div>
    );

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <input
          type="text"
          id="title"
          placeholder="Title"
          value={activeNote.title}
          autoFocus
          onChange={(e) => onEditField("title", e.target.value)}
        />
        <div className="displayNoteDateTime">
            <p>
              {new Date(activeNote.lastModified).toLocaleDateString(
                "en-GB",
                {}
              )}
            </p>
            <p>
              {new Date(activeNote.lastModified).toLocaleTimeString("en-GB", {
                hour: "2-digit",
                minute: "2-digit",
                hour12: false,
              })}
            </p>
          </div>
        <textarea
          id="body"
          placeholder="Write your note here..."
          value={activeNote.body}
          onChange={(e) => onEditField("body", e.target.value)}
        />
      </div>

      <Preview activeNote={activeNote}/>
    </div>
  );
}

export default Main;
