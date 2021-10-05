const $ = (id) => document.getElementById(id);

const expRegRange = /^(1[7-9][0-9][0-9]|20[0-9][0-9]|2100)$/;
$("title").focus();

function inputEmpty(idInput, idMsg) {
  idInput.addEventListener("blur", () => {
    if (!idInput.value.trim()) {
      idInput.classList.add("is-invalid");
      idInput.classList.remove("is-valid");
      idMsg.innerHTML = "El campo no puede estar vacio";
    } else {
      idInput.classList.add("is-valid");
      idInput.classList.remove("is-invalid");
      idMsg.innerHTML = null;
    }
  });
}

function awardsAndRating(idInput, idMsg) {
  idInput.addEventListener("blur", () => {
    if (idInput.value < 0 || idInput.value > 10) {
      idInput.classList.remove("is-valid");
      idInput.classList.add("is-invalid");
      idMsg.innerHTML = "El rango de numeros es de 0 - 10";
    }
  });
}

inputEmpty($("title"), $("msgName"));

inputEmpty($("rating"), $("msgRating"));

awardsAndRating($("rating"), $("msgRating"));

inputEmpty($("awards"), $("msgAwards"));

awardsAndRating($("awards"), $("msgAwards"));

inputEmpty($("date"), $("msgDate"));

inputEmpty($("length"), $("msgLength"));

$("length").addEventListener("blur", () => {
  if ($("length").value < 60 || $("length").value > 360) {
    $("length").classList.remove("is-valid");
    $("length").classList.add("is-invalid");
    $("msgLength").innerHTML =
      "La duracion de la pelicula no debe ser menor a 60 o mayor a 360";
  }
});

inputEmpty($("genre"), $("msgGenre"));

$("form").addEventListener("submit", function (e) {
  e.preventDefault();

  let errors = false;

  let formElements = $("form").elements;

  for (let i = 0; i < formElements.length - 1; i++) {
    if (!formElements[i]) {
      formElements[i].classList.add("is-invalid");
      errors = true;
    }
  }

  if (!errors) {
    $("form").submit();
  }
});
