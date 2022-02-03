var PianoKeys = document.querySelectorAll("div.piano-key");
var piano = document.querySelector("div.piano");
let isPlaying = false;
// setTimeout(console.log(ButtonTest[1].dataset), 1000)
// setTimeout(console.log(PianoKeys[10].dataset.note), 1000); f#
// setTimeout(console.log(ButtonTest[1].classList), 1000)

var NotesLettersBtn = document.querySelectorAll("button.btn");

for (let i = 0; i < NotesLettersBtn.length; i++) {
  NotesLettersBtn[i].addEventListener("click", function () {
    NotesLettersBtn[0].classList.toggle("btn-active");
    NotesLettersBtn[1].classList.toggle("btn-active");
    for (let i = 0; i < PianoKeys.length; i++) {
      PianoKeys[i].classList.toggle("piano-key-letter");
    }
  });
}

piano.addEventListener("mousedown", function () {
  isPlaying = true;
});
window.addEventListener("mouseup", function () {
  isPlaying = false;
});

for (let i = 0; i < PianoKeys.length; i++) {
  PianoKeys[i].addEventListener("mousedown", function () {
    var audio = new Audio("assets/audio/" + PianoKeys[i].dataset.note + ".mp3");
    audio.volume = 0.5;
    audio.play();

    PianoKeys[i].classList.toggle("piano-key-active");
    PianoKeys[i].classList.toggle("piano-key-active-pseudo");
  });
  PianoKeys[i].addEventListener("mouseup", function () {
    PianoKeys[i].classList.toggle("piano-key-active");
    PianoKeys[i].classList.toggle("piano-key-active-pseudo");
  });
  PianoKeys[i].addEventListener("mouseenter", function () {
    if (isPlaying == true) {
      var audio = new Audio(
        "assets/audio/" + PianoKeys[i].dataset.note + ".mp3"
      );
      audio.volume = 0.5;
      audio.play();

      PianoKeys[i].classList.toggle("piano-key-active");
      PianoKeys[i].classList.toggle("piano-key-active-pseudo");
    }
  });
  PianoKeys[i].addEventListener("mouseout", function () {
    if (isPlaying == true) {
      PianoKeys[i].classList.toggle("piano-key-active");
      PianoKeys[i].classList.toggle("piano-key-active-pseudo");
    }
  });
}
document.addEventListener("keydown", function (e) {
  let KeyDataCode = e.code.toUpperCase().split("");
  let RightKeyTest = KeyDataCode.slice(0, KeyDataCode.length - 1).join();
  for (let i = 0; i < PianoKeys.length; i++) {
    if (
      PianoKeys[i].dataset.letter == KeyDataCode[3] &&
      "K,E,Y" == RightKeyTest
    ) {
      var audio = new Audio(
        "assets/audio/" + PianoKeys[i].dataset.note + ".mp3"
      );
      audio.volume = 0.5;
      audio.play();

      PianoKeys[i].classList.toggle("piano-key-active");
      PianoKeys[i].classList.toggle("piano-key-active-pseudo");
    }
  }
});
document.addEventListener("keyup", function (e) {
  let KeyDataCode = e.code.toUpperCase().split("");
  let RightKeyTest = KeyDataCode.slice(0, KeyDataCode.length - 1).join();
  for (let i = 0; i < PianoKeys.length; i++) {
    if (
      PianoKeys[i].dataset.letter == KeyDataCode[3] &&
      "K,E,Y" == RightKeyTest
    ) {
      PianoKeys[i].classList.toggle("piano-key-active");
      PianoKeys[i].classList.toggle("piano-key-active-pseudo");
    }
  }
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
// for (let i = 0; i < NotesLettersBtn.length; i++) {
//   NotesLettersBtn[i].addEventListener("click", function () {
//     NotesLettersBtn[0].classList.toggle("btn-active");
//     NotesLettersBtn[1].classList.toggle("btn-active");
//     for (let i = 0; i < PianoKeys.length; i++) {
//       PianoKeys[i].classList.toggle("piano-key-letter");
//     }

//     console.log(i);
//   });
// }

// function PianoKeysControler() {
// for (let i = 0; i < PianoKeys.length; i++) {
//   PianoKeys[i].classList.toggle("piano-key-letter");
//   console.log(i);
// PianoKeys[i].addEventListener("click", function () {
// //   var audio = new Audio(
// //     "assets/audio/" + PianoKeys[i].dataset.note + ".mp3"
// //   );
// //   audio.volume = 0.0;
// //   audio.play();
//    console.log(i);

// });
//   }
// }
