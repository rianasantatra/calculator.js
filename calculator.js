const display = document.querySelector(".display");
const buttons = document.querySelectorAll(".buttons button");

let hasDecimal = false; // Variable pour suivre si un point a déjà été ajouté

// Initialiser l'affichage à 0
display.value = "0";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "C") {
      display.value = "0"; // Réinitialiser à 0
      hasDecimal = false;
    } else if (value === "=") {
      try {
        display.value = eval(display.value) || "0"; // Calculer l'expression
        hasDecimal = display.value.includes(".");
      } catch {
        display.value = "Erreur";
      }
    } else if (value === ".") {
      if (!hasDecimal) {
        if (
          display.value === "0" ||
          isNaN(display.value[display.value.length - 1])
        ) {
          display.value += "."; // Ajouter directement un point sans 0 redondant
        } else {
          display.value += ".";
        }
        hasDecimal = true;
      }
    } else {
      if (display.value === "0" && !isNaN(value)) {
        display.value = value; // Remplacer le 0 initial par la nouvelle valeur
      } else {
        display.value += value;
      }
      if (isNaN(value) && value !== ".") {
        hasDecimal = false;
      }
    }
  });
});
