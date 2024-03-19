const dumbButton = document.getElementById("dumb-button");

dumbButton.addEventListener("click", showHide);

function showHide() {
  const buttonOutput = document.getElementById("button-output");
  buttonOutput.classList.toggle("invisible");
}

//

let slider = document.getElementById("slider");

slider.addEventListener("input", update);

function update() {
  let sliderOutput = document.getElementById("slider-output");
  sliderOutput.innerText = slider.value;
}
