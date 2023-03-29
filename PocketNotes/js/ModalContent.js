 // we are adding the text to the and creating the input modal.
 // modal content
 const confirmContent = $("#confirm-content");
 const confirmDescription = $("#delete-btn-description");
 const buttonContent = $("#yes-delete-btn");
 const yesDeleteButton = $("#yes-delete-btn");
 export function inputConfirmModal() {
    confirmContent.text("CONFIRM");
    confirmDescription.text(
      "Seems like you are in the middle of adding/editing content. Do you want to leave?"
    );
    yesDeleteButton.text("YES, CLOSE");
  }
  // we are adding the text to the and creating the delete modal.
  export function deleteModal() {
    confirmContent.text("CONFIRM DELETE");
    confirmDescription.text("Are you sure you want to delete this note?");
    yesDeleteButton.text("YES, DELETE");
  }
  // we are adding the text to the and creating the deleteAll modal.
  export function deleteAllModal() {
    confirmContent.text("DELETE ALL NOTE");
    confirmDescription.text("Are you sure you want to delete all notes");
    yesDeleteButton.text("YES, DELETE");
  }
  //We are hiding and resetting the Modal Content.
  export function hideModalContent() {
    confirmContent.text("");
    confirmDescription.text("");
    yesDeleteButton.text("");
  }