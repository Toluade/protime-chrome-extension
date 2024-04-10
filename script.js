function drag() {
  const myElement = document.getElementById("protime-container");

  myElement.addEventListener("dragstart", (evt) => {
    evt.dataTransfer.setData("id", "my-element");

    const boundingRect = myElement.getBoundingClientRect();
    const offset = {
      x: evt.clientX - boundingRect.left,
      y: evt.clientY - boundingRect.top,
    };
    evt.dataTransfer.setData("offset", JSON.stringify(offset));
  });

  document.documentElement.addEventListener("dragover", (evt) => {
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "move";
  });

  document.documentElement.addEventListener("drop", (evt) => {
    evt.preventDefault();

    if (evt.dataTransfer.getData("id") === "my-element") {
      const offset = JSON.parse(evt.dataTransfer.getData("offset"));
      const xPos = evt.clientX - offset.x;
      const yPos = evt.clientY - offset.y;
      myElement.style.left = `${xPos}px`;
      myElement.style.top = `${yPos}px`;
      myElement.style.bottom = "auto";
      myElement.style.right = "auto";
    }
  });
}

function close() {
  const myElement = document.getElementById("protime-container");
  const styleSheet = document.getElementById("protime-extension-styles");
  myElement.remove();
  styleSheet.remove();
}

document
  .getElementById("extension-close-button")
  .addEventListener("click", close);
drag();
