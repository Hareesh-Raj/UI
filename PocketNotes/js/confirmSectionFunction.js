import {disableScroll,enableScroll} from "./ScrollFunctions.js";
const confirmSection = $("#confirm-section");
// this will display the confirm modal
export function displayConfirmContainer() {
    $(confirmSection).removeClass("hide");
    disableScroll();
  }
  // this will hide the confirm modal
 export function hideConfirmContainer() {
    $(confirmSection).addClass("hide");
    enableScroll();
  }