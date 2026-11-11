const form = document.getElementById("form");
const inputLot = document.getElementById("inputLot");
const selectType = document.getElementById("selectType");
const isCompliant = document.getElementById("isCompliant");
const warning = document.getElementById("warning");
const submitButton = document.getElementById("submitButton");
const preview = document.getElementById("preview");

inputLot.addEventListener("input", () => {
  submitButton.disabled = inputLot.value.trim().length < 3;
});

isCompliant.addEventListener("change", () => {
  warning.hidden = !isCompliant.checked;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const today = new Date().toLocaleDateString("fr-FR");
  const typeLabel = selectType.options[selectType.selectedIndex].text;
  const status = isCompliant.checked ? "Non conforme" : "Conforme";
  const statusColor = isCompliant.checked ? "darkred" : "darkgreen";

  preview.innerHTML = `
    <p>Lot : ${inputLot.value}</p>
    <p>Type : ${typeLabel}</p>
    <p>Date : ${today}</p>
    <p style="color: ${statusColor}">${status}</p>
  `;
  preview.hidden = false;
});