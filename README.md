# Image Editing Application 🖼️

## Overview

The Image Editing App is a web-based tool designed to offer a range of image editing features. Users can adjust brightness, saturation, and contrast, apply filters, and perform image rotations and flips. This application is built to preserve the original pixel quality of images, ensuring that all edits maintain sharpness and clarity.

Developed as part of a JavaScript challenge, this project demonstrates advanced image manipulation techniques and illustrates practical applications of JavaScript in real-world scenarios.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Code Explanation](#code-explanation)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- **Adjust Brightness, Saturation, and Contrast**: Fine-tune the image’s appearance with precision.
- **Apply Filters**: Enhance images with stylish effects such as Sepia and Grayscale.
- **Image Rotation and Flipping**: Rotate and flip images horizontally or vertically.
- **Image Saving**: Download the edited image while preserving its original pixel quality.

## Technologies Used

- **HTML5**: Provides the structure of the application.
- **CSS3**: Handles the styling and layout.
- **JavaScript**: Implements the core functionality and interactivity.
- **Canvas API**: Facilitates image processing and manipulation.

## Project Structure

```bash
/image-editing-app
│
├── index.html        # Main HTML file
├── style.css         # Stylesheet for visual design
├── script.js         # JavaScript file with core functionality
├── README.md         # Documentation for the project
└── /images           # Folder for project images
```

## Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/AyushKatiyar13/Image-Editing-App.git
   ```

2. **Navigate to the Project Directory**:
   ```bash
   cd Image-Editing-App
   ```

3. **Open index.html in a Web Browser**:
   Double-click the `index.html` file to run the application locally in your preferred web browser.

## Usage

1. **Load an Image**: Click the "Choose Image" button to upload an image from your device.
2. **Apply Filters and Adjustments**: Use the available filter buttons and sliders to modify the image.
3. **Rotate and Flip**: Adjust the image orientation using rotation and flip options.
4. **Save the Edited Image**: Click the "Save Image" button to download the edited image with all applied filters and transformations.

## Code Explanation

### HTML

- **index.html**: Defines the application’s structure. Includes elements for file input, filter buttons, adjustment sliders, and placeholders for the image preview and filter details.

### CSS

- **style.css**: Manages the visual layout and design of the application. Includes styling for image positioning, button aesthetics, slider appearance, and responsive design.

### JavaScript

- **script.js**: Implements the application’s functionality:
  - **Variables**: Define initial filter settings and transformation states.
  - **loadImage()**: Manages image loading and display.
  - **applyFilter()**: Applies selected filters and transformations.
  - **updateFilter()**: Updates filter values based on slider input.
  - **rotateOptions**: Handles image rotation and flipping.
  - **resetFilter()**: Resets all adjustments to default settings.
  - **saveImage()**: Saves the edited image while preserving its quality.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **ChatGPT**: For valuable guidance and support with JavaScript functions and techniques.
- **Online Resources**: For tutorials and references utilized during development.

To use my project, click here: https://ayushkatiyar13.github.io/Image-Editing-Application/

## Thank you! 😊
