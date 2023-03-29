import {displayNewContainer} from "./NewContainer.js";
import { indivudalNote } from "./indivudalNoteDisplay.js";
import { hideNewContainer } from "./NewContainer.js";
import { hideSingleNoteSection } from "./indivudalNoteDisplay.js";
import { displayPocketNotesContainer } from "./pocketNotes.js";
const addButton = $("#add-btn");
const saveButton = $("#save-btn");
  export function dateFuntion() {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    return month.slice(0, 3) + " " + date.getDate() + ", " + date.getFullYear();
  }
// the part is displayed when user needs to edit the note.
export function displayEditSection() {
    displayNewContainer();
    $(addButton).addClass("hide");
    $(saveButton).removeClass("hide");
    setContent();
  }
  // this will hide the edit section.
  export function hideEditSection() {
    hideNewContainer();
    hideSingleNoteSection();
    displayPocketNotesContainer();
    $(addButton).removeClass("hide");
    $(saveButton).addClass("hide");
  }
  // this is called to set the values in the selected note in form fields.
  export function setContent() {
    $("#input-title").val(indivudalNote["title"]);
    $("#image-url").val(indivudalNote["imageUrl"]);
    $("#notesContent").val(indivudalNote["content"]);
    let ticks = $(".tick-icon");
    Array.from(ticks).forEach((tick) => {
      $(tick).addClass("hide");
    });
    const tick = $($("#" + indivudalNote["color"]).children())[0];
    $(tick).removeClass("hide");
  }
  
  