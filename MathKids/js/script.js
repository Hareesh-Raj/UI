const shapesData = {
    circle: {
      inputText: "2. Enter Radius",
      name: "Circle",
      value: "r",
      areaFormula: "&pi;r<sup>2</sup>",
      perimeterFormula: "2&pi;r",
      calcArea: (value) => 3.14 * value * value,
      calcPerimeter: (value) => 2 * 3.14 * value,
    },
    triangle: {
      inputText: "2. Enter Side (Base & Height)",
      name: "Equilateral Triangle",
      value: "s",
      areaFormula: "0.433 * s * s",
      perimeterFormula: "3 * s",
      calcArea: (value) => 0.433 * value * value,
      calcPerimeter: (value) => 3 * value,
    },
    square: {
      inputText: "2. Enter Side",
      name: "Square",
      value: "s",
      areaFormula: "s * s",
      perimeterFormula: "4 * s",
      calcArea: (value) => value * value,
      calcPerimeter: (value) => 4 * value,
    },
  };
  
  
const shapeLayer = document.querySelector("#shapeLayer");
const inputLayer = document.querySelector("#inputLayer");
const outputLayer = document.querySelector("#outputLayer");

//Shape layer
const shapes = document.querySelectorAll(".shape");
const ticks = document.querySelectorAll(".tick-icon");
const resultTableRows = document.querySelector("#outputTable").children[0].children;

const nextButton = document.getElementById("nextButton");
const calculateButton = document.getElementById("calculateButton");
const startAgainButton = document.getElementById("startButton");

const shapeDataObject = {
    selectedShape: "",
    shapeValue: 0,
    currentLayer: 0,
  };
  if (localStorage.getItem("Data") != null) {
    Object.assign(shapeDataObject, JSON.parse(localStorage.getItem("Data")));
  }
  if (shapeDataObject.currentLayer == 0) {
    shapeLayer.classList.remove("hide");
  } else if (shapeDataObject.currentLayer == 1) {
    setInputLayerData();
  } else {
    setOutputLayerData();
  }
  
Array.from(shapes).forEach((shape)=>{
    shape.addEventListener("click",(event)=>{
        Array.from(ticks).forEach((tick)=>{
            tick.classList.add("hide");
        })
        shapeDataObject.selectedShape = event.target.getAttribute("id");
        // console.log(event.target.children[0]);
        event.target.children[0].classList.remove("hide");
        nextButton.classList.remove("hide");
    })
})

nextButton.addEventListener("click",(event)=>{
    shapeLayer.classList.add("hide");
    Array.from(ticks).forEach((tick)=>{
        tick.classList.add("hide");
    })
    nextButton.classList.add("hide");
    shapeDataObject.currentLayer=1;
    localStorage.setItem("Data",JSON.stringify(shapeDataObject));
    setInputLayerData();
})

document.addEventListener("keyup",(event)=>{
   
   if(event.code === 'Enter')
    checker();
})

calculateButton.addEventListener("click",(event)=>{
   checker();
})

function checker()
{
    let inputNumber = document.getElementById("inputNumber");
    if(inputNumber.value == "")
    {
        inputNumber.classList.add("animation");
        inputNumber.style.borderColor="red";
        console.log("hello");
    }
    else
    {
        shapeDataObject.shapeValue = inputNumber.value;
        inputNumber.style.borderColor="white";
        inputNumber.value="";
        shapeDataObject.currentLayer=2;
        localStorage.setItem("Data", JSON.stringify(shapeDataObject));
        setOutputLayerData();
    }
}

startAgainButton.addEventListener("click",()=>{
    shapeDataObject.selectedShape = "";
  shapeDataObject.shapeValue = 0;
  shapeDataObject.currentLayer = 0;
    outputLayer.classList.add("hide");
    shapeLayer.classList.remove("hide");
    localStorage.removeItem("Data");
})

function setInputLayerData()
{
    let inputText = document.getElementById("inputText");
    inputText.innerHTML = shapesData[shapeDataObject["selectedShape"]]["inputText"];
    
    inputLayer.classList.remove("hide");
}

function setOutputLayerData()
{

    document.querySelector("#shapeContainer").children[0].className = shapeDataObject["selectedShape"];
    // console.log(document.querySelector("#shapeContainer").children[0].className);
    const shape = shapeDataObject.selectedShape;
    const shapeData = shapesData[shapeDataObject["selectedShape"]];
    document.getElementById("shapeName").innerHTML = shape[0].toUpperCase()+shape.slice(1);
    resultTableRows[0].children[1].innerHTML = shapeData["value"];
    // console.log(document.querySelector("#outputTable").children[0].children[0].children[0].innerText);
  resultTableRows[1].children[1].innerHTML = shapeData["areaFormula"];
  resultTableRows[2].children[1].innerHTML = shapeData["perimeterFormula"];
  const shapeValue = shapeDataObject["shapeValue"];
  resultTableRows[0].children[2].innerText = shapeValue + " cm";
  resultTableRows[1].children[2].innerText = shapeData.calcArea(shapeValue).toFixed(2) + " sq cm";
  resultTableRows[2].children[2].innerText = shapeData.calcPerimeter(shapeValue).toFixed(2) + " cm"; 
    inputLayer.classList.add("hide");
    outputLayer.classList.remove("hide");
    calculateButton.classList.remove("animation");

}