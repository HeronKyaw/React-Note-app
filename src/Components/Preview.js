import { ReactMarkdown } from "react-markdown/lib/react-markdown";

function Preview({activeNote}) {
  return (
    <div className="app-main-note-preview">
        <h1 className="preview-title">{activeNote.title}</h1>
        <ReactMarkdown className="markdown-preview">
          {activeNote.body}
        </ReactMarkdown>
      </div>
  );
}

export default Preview;