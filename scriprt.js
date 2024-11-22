// Get references to sliders and display elements
const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');
const alphaSlider = document.getElementById('alpha');

const redValue = document.getElementById('redValue');
const greenValue = document.getElementById('greenValue');
const blueValue = document.getElementById('blueValue');
const alphaValue = document.getElementById('alphaValue');

const rgbaCode = document.getElementById('rgbaCode');

// Function to update the background and RGBA code
function updateColor() {
  const r = redSlider.value;
  const g = greenSlider.value;
  const b = blueSlider.value;
  const a = alphaSlider.value;

  const rgba = `rgba(${r}, ${g}, ${b}, ${a})`;

  // Update values and background
  redValue.textContent = r;
  greenValue.textContent = g;
  blueValue.textContent = b;
  alphaValue.textContent = a;
  rgbaCode.textContent = rgba;

  document.body.style.backgroundColor = rgba;
}

// Add event listeners to sliders
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);
alphaSlider.addEventListener('input', updateColor);

// Initial color update
updateColor();
