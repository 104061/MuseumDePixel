const knop = document.getElementById("terugknop");

    // Voeg een klik-event toe dat de gebruiker terugstuurt
    knop.addEventListener("click", function() {
      history.back();
    });