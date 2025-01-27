setUpInputToggleVisibility(".password-input-wrapper");
setUpForm("form");

function setUpInputToggleVisibility(cssSelector) {
  const inputWrapper = document.querySelector(cssSelector);
  const input = inputWrapper.querySelector("input");
  const toggleButton = inputWrapper.querySelector("button");

  toggleButton.addEventListener("click", () => {
    const inputType = input.getAttribute("type");
    input.setAttribute("type", inputType === "password" ? "text" : "password");
  });
}

function setUpForm(cssSelector) {
  const form = document.querySelector(cssSelector);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const data = {};

    formData.forEach((value, key) => {
      data[`${key}`] = value;
    });

    console.log("data:", data);
  });
}
