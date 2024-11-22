# Color Visualizer 🎨

A simple and interactive tool to experiment with custom colors using RGBA sliders. This project allows users to create colors, view their RGBA and HEX values in real-time, and copy the HEX code for easy use in web or design projects.

## Features

- Adjust Red, Green, Blue, and Alpha (transparency) sliders to create colors.
- Real-time background updates based on selected color.
- Displays RGBA and HEX color codes dynamically.
- Copy HEX code to clipboard with a single click.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/iboy-x/cColorizer.git

## Usage 🛠️

1. Use sliders to adjust RGBA values for Red, Green, Blue, and Alpha (transparency).
2. Watch the background color update in real-time as you adjust the sliders.
3. View the generated **RGBA** and **HEX** codes displayed dynamically.
4. Copy the HEX code by clicking the **Copy** button.

## How It Works 🔧

- **Sliders**: Each slider adjusts a specific color component:
  - **Red, Green, Blue (RGB)**: Range from 0 to 255.
  - **Alpha (A)**: Range from 0 to 1, representing transparency.
- **Color Codes**:
  - **RGBA**: Generated dynamically from slider values.
  - **HEX**: Calculated from RGB values using a conversion function.
- **Copy Functionality**: The Clipboard API enables copying the HEX code to the clipboard with one click.

## Technologies Used 💻

- **HTML**: Structures the webpage.
- **CSS**: Styles the layout for a clean and responsive design.
- **JavaScript**: Implements real-time functionality, updates color codes, and handles clipboard interactions.
