import {displayEmptyContainer,hideEmptyContainer} from "./emptyContainerFunctions.js";
import {disableScroll,enableScroll} from "./ScrollFunctions.js";
import {displayConfirmContainer,hideConfirmContainer} from "./confirmSectionFunction.js";
import {inputConfirmModal,deleteModal,deleteAllModal,hideModalContent} from "./ModalContent.js"
//The codes starts here.
$(document).ready(function () {
  // this variable is used to store the data from the local storage.
  let data = [];
  // this is used to store the colors that can be used in creating the notes.
  const colorData = {
    "color-1": "#ebccec",
    "color-2": "#fcfcfc",
    "color-3": "#ffca72",
    "color-4": "#e4ed91",
    "color-5": "#ffa78c",
  };
  //Here we get the array from the local storage and we are storing it in data variable.
  var localData = JSON.parse(localStorage.getItem("NotesData"));
  data = $.map(localData, function (value, index) {
    return [value];
  });

  //containers
  const pocketNotes = $("#pocket-notes");
  const emptyNotes = $("#empty-notes");
  const newNotesSection = $("#new-notes-section");
  const confirmSection = $("#confirm-section");
  const displayFullContainerSection = $("#display-full-notes-container");
  //buttons
  const deleteButton = $("#delete-btn");
  const editButton = $("#edit-btn");
  const saveButton = $("#save-btn");
  const backButton = $("#back-btn");
  const deleteAllButton = $("#delete-all-btn");
  const newButton = $("#new-btn");
  const footerButton = $("#footer-button");
  const addButton = $("#add-btn");
  const loadMoreButton = $("#load-more-btn");
  //confirm section
  const confirmCancelButton = $("#confirm-cancel-btn");
  const yesDeleteButton = $("#yes-delete-btn");
  const cancelButton = $("#cancel-btn");
  
  //used for verifying whether the 10 items are rendered while load more is clicked.
  let footercount = 10;
  //this will check whether local storage is null or not and display accordingly.
  if (localStorage.getItem("NotesData") == null) {
    displayEmptyContainer();
  } else {
    displayPocketNotesContainer();
  }
  //this function is called by the displayPocketNotesContainer this will append the elements.
  function displayNotesContent() {
    $(pocketNotes).empty(".notes");
    let count = 0;
    footercount = 10;
    for (let noteData of data) {
      if (count < 10) {
        const notes = $("<div>");
        notes.addClass("notes");
        notes.attr("id", noteData["id"]);
        const notesTitle = $("<span>");
        notesTitle.attr("id", "notes-title");
        notesTitle.html(noteData["title"]);
        const notesDate = $("<span>");
        notesDate.attr("id", "notes-date");
        notesDate.html(noteData["date"]);
        notes.css("background-color", colorData[noteData["color"]]);
        notes.append(notesTitle);
        notes.append(notesDate);
        if (noteData["imageUrl"] != "") {
          const notesImage = $("<div>");
          notesImage.attr("id", "notes-image");
          const image = $("<img>");
          image.attr("src", noteData["imageUrl"]);
          image.attr("alt", "image");
          notesImage.append(image);
          notes.append(notesImage);
        }
        const notesContent = $("<p>");
        notesContent.attr("id", "notes-content");
        notesContent.text(noteData["content"]);

        notes.append(notesContent);
        pocketNotes.append(notes);
        const notesContainer = $(".notes");
        Array.from(notesContainer).forEach((color) => {
          $(color).click(function () {
            const id = $(this)[0].id;
            displaySingleNote(id);
          });
        });
      } else {
        return false;
      }
      count++;
    }
  }
  //this object is used to store and added in the array when we need to add a new note.
  const newInputData = {
    id: "",
    title: "",
    date: "",
    imageUrl: "",
    content: "",
    color: "color-1",
  };
  //this is used to validate the input fields are given correctly.
  let inputValid = false;
  let contentValid = false;
  //this function will decide whether to display add button functionality.
  function canDisplayBtn() {
    if (inputValid && contentValid) {
      $(addButton).removeClass("disabled-btn");
      $(addButton).removeAttr("disabled");
    }
  }
  // we are resetting the add button functionality.
  function resetDisplayButton() {
    $(addButton).addClass("disabled-btn");
    $(addButton).attr("disabled");
    inputValid = false;
    contentValid = false;
  }
  
  //we are adding the event listeners to the input field and validating the fields.
  $("#input-title").on("click change", function (e) {
    if ($("#input-title").val() == "") {
      $("#title-error").text("Title Should Not be empty");
      $("#title-error").css("visibility","visible");
      inputValid = false;
    } else if ($("#input-title").val().length > 100) {
      $("#title-error").text("Exceeded (Max-length:100)");
      inputValid = false;
    } else {
      $("#title-error").css("visibility","hidden");
      inputValid = true;
      newInputData["title"] = $("#input-title").val();
      canDisplayBtn();
    }
  });
  $("#notesContent").on("click change", function (e) {
    if ($("#notesContent").val() == "") {
      $("#content-error").text("Content is required");
      $("#content-error").css("visibility","visible");
      contentValid = false;
    } else {
     
     
      $("#content-error").css("visibility","hidden");
      contentValid = true;
      canDisplayBtn();
      newInputData["content"] = $("#notesContent").val();
    }
  });
  //This function is used to give the date in the specified format.
  function dateFuntion() {
    const date = new Date();
    const month = date.toLocaleString("default", { month: "long" });
    return month.slice(0, 3) + " " + date.getDate() + ", " + date.getFullYear();
  }
  //this function is called when we need to display the pocket notes container.
  function displayPocketNotesContainer() {
    $(pocketNotes).removeClass("hide");
    $(deleteAllButton).removeClass("hide");
    $(newButton).removeClass("hide");
    var localData = JSON.parse(localStorage.getItem("NotesData"));
    data = $.map(localData, function (value, index) {
      return [value];
    });
    if (data.length > 10) {
      $(footerButton).removeClass("hide");
    }
    displayNotesContent();
  }
  //this function is called when we need to hide the pocket notes container.
  function hidePocketNotesContainer() {
    $(pocketNotes).addClass("hide");
    $(deleteAllButton).addClass("hide");
    $(newButton).addClass("hide");
    $(footerButton).addClass("hide");
  }
  //we are adding the functionality to add button while clicking.
  $(addButton).click(function (e) {
    e.preventDefault();
    let notesCount = Number(localStorage.getItem("NotesCount"));
    newInputData["id"] = "ID" + notesCount;
    localStorage.setItem("NotesCount", notesCount + 1);
    newInputData["imageUrl"] = $("#image-url").val();
    newInputData["date"] = dateFuntion();
    const localData = JSON.parse(localStorage.getItem("NotesData"));
    data = $.map(localData, function (value, index) {
      return [value];
    });
    data.unshift(newInputData);
    localStorage.setItem("NotesData", JSON.stringify(data));
    hideNewContainer();
    hideEmptyContainer();
    displayPocketNotesContainer();
    resetDisplayButton();
    $("#add-new-notes-form").trigger("reset");
  });
  
  // this function displays the new container where we can add new notes.
  function displayNewContainer() {
    $(newNotesSection).removeClass("hide");
    $(addButton).removeClass("hide");
    const colors = $(".color");
    const ticks = $(".tick-icon");
    Array.from(colors).forEach((color) => {
      $(color).click(function () {
        Array.from(ticks).forEach((tick) => {
          $(tick).addClass("hide");
        });
        newInputData["color"] = $(this)[0].id;
        $($(this).children()[0]).removeClass("hide");
      });
    });
    disableScroll();
  }
  // this function hides the new container
  function hideNewContainer() {
    $(newNotesSection).addClass("hide");
    $(addButton).addClass("hide");
    enableScroll();
  }
 
  //Adding a functionality to the newButton.
  $(newButton).click(function () {
    displayNewContainer();
  });
  //In this we adding the functionality to the close button of the close button in the input field.
  $(cancelButton).click(function () {
    inputConfirmModal();
    displayConfirmContainer();
    $(confirmCancelButton).click(function () {
      hideConfirmContainer();
      hideModalContent();
      disableScroll();
    });
    $(yesDeleteButton).click(function () {
      hideConfirmContainer();
      hideNewContainer();
      $("#add-new-notes-form").trigger("reset");
    });
  });
  //adding deleteAll functionality.
  $(deleteAllButton).click(function () {
    deleteAllModal();
    $(confirmSection).removeClass("hide");
    $(confirmCancelButton).click(function () {
      $(confirmSection).addClass("hide");
    });
    $(yesDeleteButton).click(function () {
      hidePocketNotesContainer();
      localStorage.removeItem("NotesData");
      localStorage.setItem("NotesCount", 1);
      $(confirmSection).addClass("hide");
      displayEmptyContainer();
    });
  });
  //we are displaying the individual notes section with full width.
  function displaySingleNoteSection() {
    $(editButton).removeClass("hide");
    $(deleteButton).removeClass("hide");
    $(backButton).removeClass("hide");
    $(displayFullContainerSection).removeClass("hide");
    $("#logo-content").removeClass("remove-special-style");
  }
  //we are hiding the individual notes section with full width.
  function hideSingleNoteSection() {
    $(editButton).addClass("hide");
    $(deleteButton).addClass("hide");
    $(backButton).addClass("hide");
    $(displayFullContainerSection).addClass("hide");
    $("#logo-content").addClass("remove-special-style");
    $("#add-new-notes-form").trigger("reset");
  }
  //this is used a temporary variable to store the selected notes need to be displayed in the full size.
  let indivudalNote;
  //In this we are creating and setting the values to the elements in the single notes section.
  function displaySingleNote(id) {
    hidePocketNotesContainer();
    displaySingleNoteSection();
    var localData = JSON.parse(localStorage.getItem("NotesData"));
    data = $.map(localData, function (value, index) {
      return [value];
    });
    data.forEach((element) => {
      if (element["id"] == id) {
        indivudalNote = element;
        console.log(indivudalNote);
        return false;
      }
    });

    $("#display-full-notes-container").empty();
    const fullNotes = $("<div>");
    fullNotes.attr("id", "full-notes");
    const colorContainer = $("<div>");
    colorContainer.addClass("color-container");
    const color = $("<div>");
    color.attr("id", "color");
    color.css("background-color", colorData[indivudalNote["color"]]);
    colorContainer.append(color);
    fullNotes.append(colorContainer);
    const fullNotesContainer = $("<div>");
    fullNotesContainer.attr("id", "full-notes-container");
    const fullNotesTitle = $("<span>");
    fullNotesTitle.attr("id", "full-notes-title");
    fullNotesTitle.text(indivudalNote["title"]);
    const fullNotesDate = $("<span>");
    fullNotesDate.attr("id", "full-notes-date");
    fullNotesDate.text(indivudalNote["date"]);
    fullNotesContainer.append(fullNotesTitle);
    fullNotesContainer.append(fullNotesDate);
    const fullNotesImage = $("<div>");
    fullNotesImage.attr("id", "full-notes-image");

    if (indivudalNote["imageUrl"] != "") {
      const fullImage = $("<img>");
      fullImage.attr("src", indivudalNote["imageUrl"]);
      fullImage.attr("alt", "Notes Image");
      fullNotesImage.append(fullImage);
    }
    const fullNotesContent = $("<p>");
    fullNotesContent.attr("id", "full-notes-content");
    fullNotesContent.text(indivudalNote["content"]);
    fullNotesContainer.append(fullNotesImage);
    fullNotesContainer.append(fullNotesContent);
    fullNotes.append(fullNotesContainer);

    $("#display-full-notes-container").append(fullNotes);
  }
  // The back button in header section displayed when indivdual notes are displayed.
  $(backButton).click(function () {
    hideSingleNoteSection();
    displayPocketNotesContainer();
  });
  // the part is displayed when user needs to edit the note.
  function displayEditSection() {
    displayNewContainer();
    $(addButton).addClass("hide");
    $(saveButton).removeClass("hide");
    setContent();
  }
  // this will hide the edit section.
  function hideEditSection() {
    hideNewContainer();
    hideSingleNoteSection();
    displayPocketNotesContainer();
    $(addButton).removeClass("hide");
    $(saveButton).addClass("hide");
  }
  // this is called to set the values in the selected note in form fields.
  function setContent() {
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
  // edit button on click
  $(editButton).click(function () {
    displayEditSection();
  });
  // this is when we click the save button
  $(saveButton).click(function (e) {
    e.preventDefault();
    var localData = JSON.parse(localStorage.getItem("NotesData"));
    data = $.map(localData, function (value, index) {
      return [value];
    });
    data.forEach((element) => {
      if (element["id"] == indivudalNote["id"]) {
        const index = data.indexOf(element);
        data.splice(index, 1);
      }
    });
    newInputData["title"] = $("#input-title").val();
    newInputData["content"] = $("#notesContent").val();
    let notesCount = Number(localStorage.getItem("NotesCount"));
    newInputData["id"] = "ID" + notesCount;
    localStorage.setItem("NotesCount", notesCount + 1);
    newInputData["imageUrl"] = $("#image-url").val();
    newInputData["date"] = dateFuntion();
    console.log(newInputData);
    data.unshift(newInputData);
    localStorage.setItem("NotesData", JSON.stringify(data));
    $("#add-new-notes-form").trigger("reset");
    $(saveButton).addClass("hide");

    hideEditSection();
  });
  //this is called when we need to delete the single selected note.
  $(deleteButton).click(function () {
    deleteModal();
    $(confirmSection).removeClass("hide");
    $(confirmCancelButton).click(function () {
      $(confirmSection).addClass("hide");
    });
    $(yesDeleteButton).click(function () {
      data = [];
      var localData = JSON.parse(localStorage.getItem("NotesData"));
      data = $.map(localData, function (value, index) {
        return [value];
      });
      console.log(indivudalNote);
      data.forEach((element) => {
        if (element["id"] == indivudalNote["id"]) {
          const index = data.indexOf(element);
          data.splice(index, 1);
        }
      });
      localStorage.setItem("NotesData", JSON.stringify(data));
      hideSingleNoteSection();
      $(confirmSection).addClass("hide");
      console.log(data.length);
      if (data.length == 0) {
        localStorage.removeItem("NotesData");
        localStorage.setItem("NotesCount", 1);
        displayEmptyContainer();
      } else {
        displayPocketNotesContainer();
        $("#logo-content").addClass("remove-special-style");
        if (data.length > 10) {
          $(footerButton).removeClass("hide");
        }
      }
    });
  });
  // adding the functionality for the loadmore button
  let noteData;
  $(loadMoreButton).click(function () {
    var localData = JSON.parse(localStorage.getItem("NotesData"));
    noteData = $.map(localData, function (value, index) {
      return [value];
    });
    console.log(noteData);
    for (let i = footercount; i < data.length && i < footercount + 10; i++) {
      const notes = $("<div>");
      notes.addClass("notes");
      notes.attr("id", noteData[i]["id"]);
      const notesTitle = $("<span>");
      notesTitle.attr("id", "notes-title");
      notesTitle.html(noteData["title"]);
      const notesDate = $("<span>");
      notesDate.attr("id", "notes-date");
      notesDate.html(noteData["date"]);
      notes.css("background-color", colorData[noteData[i]["color"]]);
      notes.append(notesTitle);
      notes.append(notesDate);
      if (noteData[i]["imageUrl"] != "") {
        const notesImage = $("<div>");
        notesImage.attr("id", "notes-image");
        const image = $("<img>");
        image.attr("src", noteData[i]["imageUrl"]);
        image.attr("alt", "image");
        notesImage.append(image);
        notes.append(notesImage);
      }
      const notesContent = $("<p>");
      notesContent.attr("id", "notes-content");
      notesContent.text(noteData[i]["content"]);

      notes.append(notesContent);
      pocketNotes.append(notes);
      const notesContainer = $(".notes");
      Array.from(notesContainer).forEach((color) => {
        $(color).click(function () {
          const id = $(this)[0].id;
          displaySingleNote(id);
        });
      });
    }
    footercount += (noteData.length - footercount) % 10;
    if (footercount == noteData.length) {
      $(footerButton).addClass("hide");
    }
  });
});