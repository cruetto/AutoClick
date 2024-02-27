const buttonsContainer = document.getElementById("buttons-container");
const addButton = document.getElementById("add-button");

let buttonCount = 0;

addButton.addEventListener("click", () => {
  buttonCount++;

  // Create a container element for the three elements
  const container = document.createElement("div");
  container.classList.add("button-container"); // Add a class for styling

  // Create the button element
  const button = document.createElement("button");
  button.innerText = `Button ${buttonCount}`;
  button.dataset.id = buttonCount; // Add unique ID
  button.classList.add("selectButton");

  // Create the number input element
  const numberInput = document.createElement("input");
  numberInput.type = "number";
  numberInput.placeholder = "Sec";
  numberInput.classList.add("numeric");

  // Create the delete button element
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.dataset.buttonId = buttonCount; // Add ID for deletion
  deleteButton.classList.add("deleteButton");

  // Add click event listener to the delete button
  deleteButton.addEventListener("click", () => {
    container.remove(); // Remove the entire container element
  });

  // Append all elements to the container
  container.appendChild(button);
  container.appendChild(numberInput);
  container.appendChild(deleteButton);

  // Append the container to the buttons container
  buttonsContainer.appendChild(container);
});