const styles = `
#protime-container {
  min-width: 300px;
  min-height: 150px;
  margin: 0;
  position: fixed;
  padding: 10px;
  background: transparent;
  white-space: nowrap;
  display: inline-block;
  cursor: move;
  border-radius: 4px;
  transition: 0.3s;

  &:hover {
    border: 1px dashed black;
  }
}
.resizer {
  display: flex;
  margin: 0;
  padding: 0;
  resize: both;
  overflow: hidden;
}
.resizer > .resized {
  flex-grow: 1;
  margin: 0;
  padding: 0;
  border: 0;
}
.close-extension-container {
  display: flex;
  justify-content: end;
  padding-block: 5px;
}
.close-extension {
  cursor: pointer;
  color: black;
  visibility: hidden;
}
#protime-container:hover {
  .close-extension {
    visibility: visible;
  }
}
@media (prefers-color-scheme: dark) {
  #protime-container {
    &:hover {
      border: 1px dashed white;
    }
  }
  .close-extension {
    color: white;
  }
}
`;

function init() {
  const styleSheet = document.createElement("style");
  styleSheet.innerText = styles;
  const injectelement = document.createElement("div");
  injectelement.setAttribute("id", "protime-container");
  injectelement.setAttribute("draggable", "true");
  injectelement.style.minWidth = "300px";
  injectelement.style.minHeight = "150px";
  injectelement.style.position = "fixed";
  injectelement.style.top = "0";
  // injectelement.style.left = "0";
  injectelement.style.zIndex = "99999";
  injectelement.style.padding = "10px";
  injectelement.style.background = "transparent";
  injectelement.style.whiteSpace = "nowrap";
  injectelement.style.display = "inline-block";
  injectelement.style.cursor = "move";
  injectelement.style.borderRadius = "4px";
  //   injectelement.style
  injectelement.innerHTML = `
  <div class="close-extension-container"><button id="extension-close-button" class="close-extension">X</button></div>
  <div class="resizer">
      <iframe
        class="resized"
        src="https://protime-v2.netlify.app"
        frameborder="0"
      ></iframe>
    </div>
  `;
  document.head.appendChild(styleSheet);
  document.body.appendChild(injectelement);
}

init();
