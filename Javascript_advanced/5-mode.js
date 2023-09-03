let changeMode = (size, weight, transform, background, color) => () => {
  document.body.style.fontSize = size + "px";
  document.body.style.fontWeight = weight;
  document.body.style.textTransform = transform;
  document.body.style.backgroundColor = background;
  document.body.style.color = color;
};

let main = () => {
  let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  let p = document.createElement("p");
  p.innerText = "Welcome Holberton!";
  document.body.appendChild(p);

  let createButton = (buttonName) => {
    let button = document.createElement("button");
    button.innerText = buttonName;
    return button;
  };

  let spookyBtn = createButton("Spooky");
  let darkModeBtn = createButton("Dark mode");
  let screamModeBtn = createButton("Scream mode");

  document.body.appendChild(spookyBtn);
  document.body.appendChild(darkModeBtn);
  document.body.appendChild(screamModeBtn);

  spookyBtn.addEventListener("click", () => spooky());
  darkModeBtn.addEventListener("click", () => darkMode());
  screamModeBtn.addEventListener("click", () => screamMode());
};

main();
