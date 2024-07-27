Image Editing Application

Overview
The Image Editing App is a web-based tool that empowers users to perform a variety of image editing tasks. This application supports features such as adjusting brightness, saturation, and contrast, as well as applying filters. Designed to preserve image pixel quality, it ensures that all edits maintain the sharpness and clarity of the original images.

Developed as a JavaScript challenge, this project showcases advanced image manipulation techniques and serves as a practical demonstration of how to apply JavaScript in real-world applications.

Table of Contents
Features
Technologies Used
Project Structure
Installation
Usage
Code Explanation
HTML
CSS
JavaScript
License
Acknowledgments

Features
Adjust Brightness, Saturation, and Contrast: Fine-tune the image’s appearance with precision.
Apply Filters: Add stylish effects such as Sepia and Grayscale to enhance images.
Image Rotation and Flipping: Rotate and flip images horizontally or vertically for desired orientation.
Image Saving: Download the edited image while preserving its original pixel quality.

Technologies Used
HTML5: Provides the structure of the application.
CSS3: Handles the styling and layout.
JavaScript: Implements the core functionality and interactivity.
Canvas API: Facilitates image processing and manipulation.

Project Structure
bash
Copy code
/image-editing-app
│
├── index.html        # Main HTML file
├── style.css         # Stylesheet for visual design
├── script.js         # JavaScript file with core functionality
├── README.md         # Documentation for the project
└── /images           # Folder for project images

Installation
Clone the Repository:

bash
Copy code
git clone https://github.com/AyushKatiyar13/Image-Editing-App.git
Navigate to the Project Directory:

bash
Copy code
cd Image-Editing-App
Open index.html in a Web Browser:

Double-click the index.html file to run the application locally in your preferred web browser.

Usage
Load an Image: Click the "Choose Image" button to upload an image from your device.
Apply Filters and Adjustments: Use the available filter buttons and sliders to modify the image.
Rotate and Flip: Adjust the image orientation using rotation and flip options.
Save the Edited Image: Click the "Save Image" button to download the edited image with all applied filters and transformations.

Code Explanation
HTML
index.html: Defines the application’s structure. Includes elements for file input, filter buttons, adjustment sliders, and placeholders for the image preview and filter details.

CSS
style.css: Manages the visual layout and design of the application. It includes styling for image positioning, button aesthetics, slider appearance, and responsive design.

JavaScript
script.js: Implements the application’s functionality, including:
Variables: Define initial filter settings and transformation states.
loadImage(): Manages image loading and display.
applyFilter(): Applies selected filters and transformations.
updateFilter(): Updates filter values based on slider input.
rotateOptions: Handles image rotation and flipping.
resetFilter(): Resets all adjustments to default settings.
saveImage(): Saves the edited image while preserving its quality.

Acknowledgments
ChatGPT: For valuable guidance and support with JavaScript functions and techniques.
Online Resources: For tutorials and references utilized during development.

To use my project click here: https://ayushkatiyar13.github.io/Image-Editing-Application/

Thankyou 
