import {MdAdd} from 'react-icons/md';

function SideBar({
  notes,
  onAddNote,
  onDeleteNote,
  activeNote,
  setActiveNote,
}) {

  const sortedNotes = notes.sort((a, b) => b.lastModified - a.lastModified);
  
  return (
    <div className="app-sidebar">
      <div className="app-sidebar-header">
        <h1>Noted.</h1>
        <button onClick={onAddNote} className='addButton'><MdAdd size="2.5rem"/></button>
      </div>

      <div className="app-sidebar-notes">
        {sortedNotes.map(({ id, title, body, lastModified }) => (
          <div 
            className={`app-sidebar-note ${id === activeNote && 'active'}`} 
            onClick={() => setActiveNote(id)}
          >
            <div className="sidebar-note-title">
              <strong>
                {title && title.length > 25 ? title.substring(0, 25) + "..." : title}
              </strong>
              <button onClick={() => onDeleteNote(id)}>Delete</button>
            </div>

            <p>{body && body.substring(0, 40) + "..."}</p>

            <small className="dateTime">
              <p>{new Date(lastModified).toLocaleDateString("en-GB", {})}</p>
              <p>
                {new Date(lastModified).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: false,
                })}
              </p>
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
