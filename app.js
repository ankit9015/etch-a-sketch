const buttonReset = document.querySelector("#reset");
const buttonBlack = document.querySelector("#black");
const buttonRGB = document.querySelector("#rgb");
let inputColor = document.querySelector("#input-color");
let gridSize = document.querySelector("#grid-size");
const showSize = document.querySelector("#show-size");
const drawingGrid = document.querySelector("#drawing-grid");




let colorMode = "default";

function createGrid (size) {
    // console.log(size);
    drawingGrid.setAttribute('style',
     `grid-template-columns: repeat(${size}, 2fr);
    grid-template-rows: repeat(${size}. 2fr);`)
    // removeAllChildNodes(drawingGrid)
    for (let i=0; i < size*size; i++) {
        let div = document.createElement('div');
        div.classList.add('cell');
        

        div.addEventListener("mouseover", changeColor);

        drawingGrid.appendChild(div);
    }

};

function removeAllChildNodes (parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function reloadGrid (size) {
    removeAllChildNodes(drawingGrid);
    createGrid(size);
}

function getRandomColor () {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
};

function rainbow () {

}

function changeColor(e) {
    let penColor = ""
    if (colorMode == "default") {
        penColor = "black";
    } else if (colorMode == "rgb") {
        penColor = getRandomColor()
    } else if (colorMode == "color picker") {
        penColor = `${inputColor.value}`;
    }
    e.target.style.backgroundColor = `${penColor}`;
}







window.addEventListener("load", createGrid(gridSize.defaultValue));







buttonBlack.addEventListener("click", () => {
    colorMode = "default";
});

buttonRGB.addEventListener("click", () => {
    colorMode = "rgb"
});

buttonReset.addEventListener("click", () => { reloadGrid(gridSize.value) });

inputColor.addEventListener("input", () => {
    colorMode = "color picker"
    console.log(inputColor.value);
})

gridSize.addEventListener("input", () => {
    reloadGrid(gridSize.value);
    showSize.innerText = `${gridSize.value} x ${gridSize.value}`;
});

