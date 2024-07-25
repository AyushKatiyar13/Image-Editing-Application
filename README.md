Image Editing Application

Overview

Image Editing App is a web-based application that allows users to perform various image editing functions, including adjusting brightness, saturation, contrast, and applying filters. This application is designed to maintain the pixel quality of images, ensuring sharp and clear edits.

This project was created using JavaScript and showcases various image manipulation techniques. It was developed as a challenge to improve my JavaScript skills and learn how to apply them effectively in a real-world application.

Table of Contents

1. Features
2. Technologies Used
3. Project Structure
4. Installation
5. Usage
6. Code Explanation
   - HTML
   - CSS
   - JavaScript
7. License
8. Acknowledgments

Features

- Adjust Brightness, Saturation, and Contrast: Fine-tune the image’s appearance.
- Apply Filters: Add effects like Sepia and Grayscale.
- Image Rotation and Flipping:** Rotate the image and flip it horizontally or vertically.
- Image Saving: Save the edited image without losing pixel quality.

Technologies Used

- HTML5 for structure
- CSS3 for styling
- JavaScript for functionality
- Canvas API for image processing

Project Structure

```
/image-editing-app
│
├── index.html        # The main HTML file
├── style.css         # The stylesheet for styling
├── script.js         # The JavaScript file with functionality
├── README.md         # Project documentation
└── /images           # Folder for images used in the project
```

Installation

1. Clone the Repository:

   ```
   git clone https://github.com/AyushKatiyar13/Image-Editing-App.git
   ```

2. Navigate to the Project Directory:

   ```
   cd Image-Editing-App
   ```

3. Open `index.html` in a Web Browser:

   Simply open the `index.html` file with your preferred web browser to run the application locally.

Usage

1. Load an Image: Click the "Choose Image" button to upload an image from your device.
2. Apply Filters and Adjustments: Use the filter buttons and sliders to modify the image.
3. Rotate and Flip: Use the rotation and flip options to adjust the image orientation.
4. Save the Edited Image: Click the "Save Image" button to download the edited image in its full quality.

Code Explanation

HTML

- index.html: Contains the structure of the web application. Includes a file input for image upload, buttons for filters, sliders for adjustments, and placeholders for displaying the image and filter information.

CSS

- **style.css:** Defines the layout and styling of the application. Styles include positioning for the image, buttons, and sliders, as well as hover effects and responsive design.

JavaScript

- script.js: Contains the core functionality of the image editing app.

  - Variables: Define initial filter values and transformation states.
  
  - loadImage(): Handles image loading and displays it in the preview area.
  
  - applyFilter(): Applies the selected filter and transformations to the image.
  
  - updateFilter(): Updates the filter values based on user input from sliders.
  
  - rotateOptions: Handles image rotation and flipping.
  
  - resetFilter(): Resets all filters and transformations to their default values.
  
  - saveImage(): Saves the edited image with the applied filters and transformations.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

- ChatGPT: For guidance and support with JavaScript functions and techniques.
- Online Resources: For various tutorials and references used during development.

Thank you😊
