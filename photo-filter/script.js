var canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

let allRagebtns = document.querySelectorAll('input[type="range"]');
let alloutput = document.querySelectorAll('output[name="result"]');
let mainImg = document.querySelector('img[alt="image"]');
mainImg.crossOrigin = "Anonymous";
let Resetbtn = document.querySelector('button[class = "btn btn-reset"]');
let nextPicturebtn = document.querySelector(
  'button[class = "btn btn-next btn-active"]'
);
let inputPicture = document.querySelector('input[name="upload"][type="file"]');
let SaveBtn = document.querySelector('button[class = "btn btn-save"]');
let filtersValues = {
  blur: "",
  invert: "",
  sepia: "",
  saturate: "",
  hue: "",
};
let canvasFilters = "";
let testf =
  "blur(1px) invert(68%) sepia(48%) saturate(119%) hue-rotate(187deg)";

for (i = 0; i != allRagebtns.length; i++) {
  listner(i);
}

function listner(i) {
  var input = allRagebtns[i];
  var output = alloutput[i];
  input.oninput = function () {
    filters(input, output, i);
  };
}

function filters(input, output, i) {
  var input = allRagebtns[i];
  output.innerHTML = input.value;

  if (input.name == "blur") {
    filtersValues.blur = input.value + input.dataset.sizing;
  }
  if (input.name == "invert") {
    filtersValues.invert = input.value + input.dataset.sizing;
  }
  if (input.name == "sepia") {
    filtersValues.sepia = input.value + input.dataset.sizing;
  }
  if (input.name == "saturate") {
    filtersValues.saturate = input.value + input.dataset.sizing;
  }
  if (input.name == "hue") {
    filtersValues.hue = input.value + input.dataset.sizing;
  }
  fInLineStyles();
}

function fInLineStyles() {
  let inLineStyles = "";
  let canvasFilterslocal = "";
  for (i = 0; i != Object.values(filtersValues).length; i++) {
    if (Object.values(filtersValues)[i] != "") {
      inLineStyles =
        inLineStyles +
        "--" +
        Object.keys(filtersValues)[i] +
        ": " +
        Object.values(filtersValues)[i] +
        "; ";

      if (i == 0) {
        canvasFilterslocal =
          canvasFilterslocal +
          Object.keys(filtersValues)[i] +
          "(" +
          Object.values(filtersValues)[i].slice(0, -2) * 3 +
          "px" +
          ") ";
      }
      if (i != 4 && i != 0) {
        canvasFilterslocal =
          canvasFilterslocal +
          Object.keys(filtersValues)[i] +
          "(" +
          Object.values(filtersValues)[i] +
          ") ";
      }
      if (i == 4) {
        canvasFilterslocal =
          canvasFilterslocal +
          "hue-rotate" +
          "(" +
          Object.values(filtersValues)[i] +
          ") ";
      }
    }
  }
  inLineStyles = inLineStyles.slice(0, -1);
  mainImg.style = inLineStyles;
  canvasFilterslocal = canvasFilterslocal.slice(0, -1);
  canvasFilters = canvasFilterslocal;
}

Resetbtn.addEventListener("click", function () {
  for (j = 0; j != allRagebtns.length; j++) {
    console.log(allRagebtns.length);
    if (allRagebtns[j].name != "saturate") {
      allRagebtns[j].value = 0;
      var input = allRagebtns[j];
      var output = alloutput[j];
      filters(input, output, j);
    } else {
      allRagebtns[j].value = 100;
      var input = allRagebtns[j];
      var output = alloutput[j];
      filters(input, output, j);
    }
  }
});

let PicNum = 00;

nextPicturebtn.addEventListener("click", function () {
  let timesOfDay = "wrong";
  let time = new Date().getHours();
  if (time >= 6 && time < 12) {
    timesOfDay = "morning";
  } else if (time >= 12 && time < 18) {
    timesOfDay = "day";
  } else if (time >= 18 && time < 24) {
    timesOfDay = "evening";
  } else if (time >= 0 && time < 6) {
    timesOfDay = "night";
  }
  PicNum++;
  if (PicNum < 6) {
    PicNum = "0" + PicNum;
  }
  if (PicNum > 5) {
    PicNum = "01";
  }
  mainImg.src =
    "./assets/img/" +
    timesOfDay +
    "/" +
    PicNum +
    ".jpg";
  inputPicture.value = null;
});

inputPicture.oninput = function () {
  let file = inputPicture.files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = function () {
    mainImg.src = reader.result;
  };
};

SaveBtn.addEventListener("click", function () {
  canvas.width = mainImg.naturalWidth;
  canvas.height = mainImg.naturalHeight;
  ctx.filter = canvasFilters;
  ctx.drawImage(mainImg, 0, 0);
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image;
  link.download = "image.png";
  link.click();
});

document.querySelector("button.fullscreen").addEventListener(
  "click",
  function () {
    toggleFullScreen();
  },
  false
);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}