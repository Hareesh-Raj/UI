// this function displays the empty container
const emptyNotes = $("#empty-notes");
const newButton = $("#new-btn");
export function displayEmptyContainer() {
    $(emptyNotes).removeClass("hide");
    $(newButton).removeClass("hide");
  }
  // this function hides the empty container
 export  function hideEmptyContainer() {
    $(emptyNotes).addClass("hide");
    $(newButton).addClass("hide");
  }