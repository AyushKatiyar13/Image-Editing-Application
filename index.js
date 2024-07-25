const fileInput = document.querySelector(".file-input"),
  filterOptions = document.querySelectorAll(".filter button"),
  filterName = document.querySelector(".filter-info .name"),
  filterValue = document.querySelector(".filter-info .value"),
  filterSlider = document.querySelector(".slider input"),
  rotateOptions = document.querySelectorAll(".rotate button"),
  previewImg = document.querySelector(".preview-img img"),
  resetFilterBtn = document.querySelector(".reset-filter"),
  chooseImgBtn = document.querySelector(".choose-img"),
  saveImgBtn = document.querySelector(".save-img");

let brightness = "100",
  saturation = "100",
  inversion = "0",
  grayscale = "0",
  contrast = "100",
  sepia = "0",
  hueRotate = "0deg",
  blur = "0px",
  rotate = 0,
  flipHorizontal = 1,
  flipVertical = 1;

const loadImage = () => {
  let file = fileInput.files[0];
  if (!file) return;
  previewImg.src = URL.createObjectURL(file);
  previewImg.addEventListener("load", () => {
    resetFilterBtn.click();
    document.querySelector(".container").classList.remove("disable");
  });
};

const applyFilter = () => {
  previewImg.style.transform = `rotate(${rotate}deg) scale(${flipHorizontal}, ${flipVertical})`;
  previewImg.style.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) contrast(${contrast}%) sepia(${sepia}%) hue-rotate(${hueRotate}) blur(${blur})`;
};

const updateFilter = () => {
  filterValue.innerText = filterSlider.value;
  const selectedFilter = document.querySelector(".filter .active");

  switch (selectedFilter.id) {
    case "brightness":
      brightness = filterSlider.value;
      break;
    case "saturation":
      saturation = filterSlider.value;
      break;
    case "inversion":
      inversion = filterSlider.value;
      break;
    case "grayscale":
      grayscale = filterSlider.value;
      break;
    case "contrast":
      contrast = filterSlider.value;
      break;
    case "sepia":
      sepia = filterSlider.value;
      break;
    case "hue-rotate":
      hueRotate = `${filterSlider.value}deg`;
      break;
    case "blur":
      blur = `${filterSlider.value * 0.1}px`; // Adjust this factor as needed
      break;
  }
  applyFilter();
};

filterOptions.forEach((option) => {
  option.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    option.classList.add("active");
    filterName.innerText = option.innerText;

    switch (option.id) {
      case "brightness":
        filterSlider.max = "200";
        filterSlider.value = brightness;
        filterValue.innerText = `${brightness}%`;
        break;
      case "saturation":
        filterSlider.max = "200";
        filterSlider.value = saturation;
        filterValue.innerText = `${saturation}%`;
        break;
      case "inversion":
        filterSlider.max = "100";
        filterSlider.value = inversion;
        filterValue.innerText = `${inversion}%`;
        break;
      case "grayscale":
        filterSlider.max = "100";
        filterSlider.value = grayscale;
        filterValue.innerText = `${grayscale}%`;
        break;
      case "contrast":
        filterSlider.max = "200";
        filterSlider.value = contrast;
        filterValue.innerText = `${contrast}%`;
        break;
      case "sepia":
        filterSlider.max = "100";
        filterSlider.value = sepia;
        filterValue.innerText = `${sepia}%`;
        break;
      case "hue-rotate":
        filterSlider.max = "360";
        filterSlider.value = parseInt(hueRotate);
        filterValue.innerText = `${hueRotate}`;
        break;
      case "blur":
        filterSlider.max = "20";
        filterSlider.value = parseInt(blur);
        filterValue.innerText = `${parseInt(blur)}px`;
        break;
    }
  });
});

rotateOptions.forEach((option) => {
  option.addEventListener("click", () => {
    if (option.id === "left") {
      rotate -= 90;
    } else if (option.id === "right") {
      rotate += 90;
    } else if (option.id === "horizontal") {
      flipHorizontal = flipHorizontal === 1 ? -1 : 1;
    } else if (option.id === "vertical") {
      flipVertical = flipVertical === 1 ? -1 : 1;
    }
    applyFilter();
  });
});

const resetFilter = () => {
  brightness = "100";
  saturation = "100";
  inversion = "0";
  grayscale = "0";
  contrast = "100";
  sepia = "0";
  hueRotate = "0deg";
  blur = "0px";
  rotate = 0;
  flipHorizontal = 1;
  flipVertical = 1;
  filterOptions[0].click();
  applyFilter();
};

const saveImage = () => {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = previewImg.naturalWidth;
  canvas.height = previewImg.naturalHeight;

  ctx.filter = `brightness(${brightness}%) saturate(${saturation}%) invert(${inversion}%) grayscale(${grayscale}%) contrast(${contrast}%) sepia(${sepia}%) hue-rotate(${hueRotate}) blur(${blur})`;
  ctx.translate(canvas.width / 2, canvas.height / 2);
  if (rotate !== 0) {
    ctx.rotate((rotate * Math.PI) / 180);
  }
  ctx.scale(flipHorizontal, flipVertical);
  ctx.drawImage(
    previewImg,
    -canvas.width / 2,
    -canvas.height / 2,
    canvas.width,
    canvas.height
  );

  const link = document.createElement("a");
  link.download = "image.jpg";
  link.href = canvas.toDataURL();
  link.click();
};

filterSlider.addEventListener("input", updateFilter);
resetFilterBtn.addEventListener("click", resetFilter);
saveImgBtn.addEventListener("click", saveImage);
fileInput.addEventListener("change", loadImage);
chooseImgBtn.addEventListener("click", () => fileInput.click());
