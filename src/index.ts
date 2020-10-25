const { body } = document;

function changeBackground(bgNumber: string): boolean | void {
  // If body has a class, set it to variable
  let prevBg: string = "background-1";
  if (body.className) {
    prevBg = body.className;
  }

  body.className = "";
  switch (bgNumber) {
    case "1":
      return prevBg === "background-1"
        ? false
        : body.classList.add("background-1");
    case "2":
      return prevBg === "background-2"
        ? false
        : body.classList.add("background-2");
    case "3":
      return prevBg === "background-3"
        ? false
        : body.classList.add("background-3");
    default:
      return prevBg === "background-1"
        ? false
        : body.classList.add("background-1");
  }
}

localStorage;
