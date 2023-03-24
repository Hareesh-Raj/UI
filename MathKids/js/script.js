// creating object of objects to store the shapes data.
const shapesData = {
  circle: {
    unit: "RADIUS",
    inputText: "2. Enter Radius",
    name: "Circle",
    formulas: {
      value: "r",
      areaFormula: "&pi;r<sup>2</sup>",
      perimeterFormula: "2&pi;r",
    },
    calculate: {
     
      calcArea: (value) => 3.14 * value * value,
    calcPerimeter: (value) => 2 * 3.14 * value,
    }
  },
  triangle: {
    unit: "SIDE",
    inputText: "2. Enter Side (Base & Height)",
    name: "Equilateral Triangle",
    formulas: {
      value: "s",
      areaFormula: "0.433 * s * s",
      perimeterFormula: "3 * s",
    },
   calculate:{
   
     calcArea: (value) => 0.433 * value * value,
      calcPerimeter: (value) => 3 * value,
   } 
  },
  square: {
    unit: "SIDE",
    inputText: "2. Enter Side",
    name: "Square",
    formulas: {
      value: "s",
      areaFormula: "s * s",
      perimeterFormula: "4 * s",
    },
    calculate:{
      calcArea: (value) => value * value,
      calcPerimeter: (value) => 4 * value,
    } 
  },
};

// storing the three layers using queryselector.
const shapeLayer = document.querySelector("#shapeLayer");
const inputLayer = document.querySelector("#inputLayer");
const outputLayer = document.querySelector("#outputLayer");

//Shape Layer
//storing the shapes and tick.
const shapes = document.querySelectorAll(".shape");
const ticks = document.querySelectorAll(".tick-icon");
//storing the resulttable.
const resultTableRows =
  document.querySelector("#outputTable").children[0].children;

//storing the buttons.
const nextButton = document.getElementById("nextButton");
const calculateButton = document.getElementById("calculateButton");
const startAgainButton = document.getElementById("startButton");

// object used to store and display according to selected items.
const shapeDataObject = {
  selectedShape: "",
  shapeValue: 0,
  currentLayer: 0,
};

//checking whether local storage contains the object or not.
//if it contains object the values are assigned to shapedataobject.
if (localStorage.getItem("Data") != null) {
  Object.assign(shapeDataObject, JSON.parse(localStorage.getItem("Data")));
}
//the content is displayed according to the value of current layer.
if (shapeDataObject.currentLayer == 0) {
  shapeLayer.classList.remove("hide");
} else if (shapeDataObject.currentLayer == 1) {
  setInputLayerData();
} else {
  setOutputLayerData();
}

//Assigning the eventlisteners to the shapes and displaying the tick in selected shape
Array.from(shapes).forEach((shape) => {
  shape.addEventListener("click", (event) => {
    Array.from(ticks).forEach((tick) => {
      tick.classList.add("hide");
    });
    shapeDataObject.selectedShape = event.target.getAttribute("id");

    event.target.children[0].classList.remove("hide");
    nextButton.classList.remove("hide");
  });
});

// Adding event Listeners to the nextbutton.
nextButton.addEventListener("click", (event) => {
  shapeLayer.classList.add("hide");
  Array.from(ticks).forEach((tick) => {
    tick.classList.add("hide");
  });
  nextButton.classList.add("hide");
  shapeDataObject.currentLayer = 1;
  localStorage.setItem("Data", JSON.stringify(shapeDataObject));
  setInputLayerData();
});
//getting and storing the selected shape.

//setting the value for the heading text according to the shape selected.
function setInputLayerData() {
  let inputText = document.getElementById("inputText");
  inputText.innerHTML =
    shapesData[shapeDataObject["selectedShape"]]["inputText"];

  inputLayer.classList.remove("hide");
}
//event listener for the enter key.
document.addEventListener("keyup", (event) => {
  if (event.code === "Enter") checker();
});
//eventlistener for the calculate button
calculateButton.addEventListener("click", (event) => {
  checker();
});

//checks for the input value and navigates to nextpage.
function checker() {
  let inputNumber = document.getElementById("inputNumber");
  if (inputNumber.value == "") {
    inputNumber.classList.add("animation");
    inputNumber.style.borderColor = "red";
  } else {
    shapeDataObject.shapeValue = inputNumber.value;
    inputNumber.classList.remove("animation");
    inputNumber.style.borderColor = "white";
    inputNumber.value = "";
    shapeDataObject.currentLayer = 2;
    //setting the localstorage with the object.
    localStorage.setItem("Data", JSON.stringify(shapeDataObject));
    setOutputLayerData();
  }
}
// assigning the values for the output layer data.
function setOutputLayerData() {
  //assiging shape container the selected shape value.
  document.querySelector("#shapeContainer").children[0].className =
    shapeDataObject["selectedShape"];

  // getting the selected shape.
  const shape = shapeDataObject.selectedShape;
  //getting whole object of selected shape from the object of shapes_data
  const shapeData = shapesData[shapeDataObject["selectedShape"]];
  //getting the formulas of the shape
  //assiging the shape name.
  document.getElementById("shapeName").innerHTML = shape[0].toUpperCase() + shape.slice(1);
  
  // assigning the unit of particular shape.
  resultTableRows[0].children[0].innerHTML = shapeData["unit"];
  //assigning the values
  let i=0;
  
  //storing the formula object and iterating the formulas and displaying.
  const formulas = Object.values(shapeData["formulas"]);
  formulas.forEach((formula_data)=>resultTableRows[i++].children[1].innerHTML = formula_data);
  
  i=1;
  const shapeValue = Number(shapeDataObject["shapeValue"]);
  //storing the calculate methods object and iterating the functions and displaying.
  const calculateMethods = Object.values(shapeData["calculate"]);
  resultTableRows[0].children[2].innerText = shapeValue + " cm";
  calculateMethods.forEach((forumla_data)=>resultTableRows[i++].children[2].innerHTML = forumla_data(shapeValue).toFixed(2)+" sq cm");
  
  inputLayer.classList.add("hide");
  outputLayer.classList.remove("hide");
  
}
//adding event listeners to the startagain button.
startAgainButton.addEventListener("click", () => {
  //resetting the local object to default values.
  shapeDataObject.selectedShape = "";
  shapeDataObject.shapeValue = 0;
  shapeDataObject.currentLayer = 0;
  outputLayer.classList.add("hide");
  shapeLayer.classList.remove("hide");
  //removing the object stored in local storage.
  localStorage.removeItem("Data");
});