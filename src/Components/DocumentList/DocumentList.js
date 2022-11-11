import { isConstructor } from "../../Helpers/checkError.js";
import DocumentDetailedList from "./DocumentDetailedList.js";

export default function DocumentList({
  $target,
  initialState,
  postDocumentEvent,
  deleteDocumentEvent,
  showChildDocumentEvent,
  hideChildDocumentEvent,
  setEditorEvent,
}) {
  isConstructor(new.target);
  const $documentList = document.createElement("div");
  $target.appendChild($documentList);
  const documentDetailedList = new DocumentDetailedList({
    $target: $documentList,
    initialState,
  });

  this.setState = async (nextState) => {
    documentDetailedList.setState(nextState);
  };

  $target.addEventListener("click", (e) => {
    if (e.target && e.target.id === "title") {
      setEditorEvent({ $target: e.target });
    }

    if (e.target && e.target.id === "postDocumentButton") {
      postDocumentEvent({ $target: e.target });
    }

    if (e.target && e.target.id === "deleteDocumentButton") {
      deleteDocumentEvent({ $target: e.target });
    }

    if (e.target && e.target.id === "showChildDocumentButton") {
      showChildDocumentEvent({ $target: e.target });
    }

    if (e.target && e.target.id === "hideChildDocumentButton") {
      hideChildDocumentEvent({ $target: e.target });
    }
  });
}
