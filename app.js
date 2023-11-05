// const splitText = (el) => {
//   if (el.firstChild === null || el.textContent === null) {
//     return;
//   }
//   const characters = el.textContent.split("").map((character, index) => {
//     const span = document.createElement("span");

//     span.textContent = character;
//     span.style.setProperty("--index", index.toString());

//     return span;
//   });

//   el.firstChild.replaceWith(...characters);
// };

// const targets = document.querySelectorAll(".text");

// targets.forEach((target) => {
//   console.log(target);
//   if (target.hasAttribute("data-split-text")) {
//     splitText(target);
//   }
// });

function reloadPage() {
  location.reload();
}
