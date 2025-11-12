const rechterblok = document.getElementsByClassName("rechter");
const middenblok = document.getElementsByClassName("midden");
const linkerblok = document.getElementsByClassName("linker");
const logo = document.getElementsByClassName("logo");
const linkerbutton = document.createElement("a");
const middenbutton = document.createElement("a");
const rechterbutton = document.createElement("a");
const backgroundimage = document.getElementsByClassName("backgroundimage");
const homebutton = document.getElementsByClassName("homepagebutton")[0];

function loadin() {
    setTimeout(() => {
        logo[0].classList.add("show");
        rechterblok[0].classList.add("show");
        middenblok[0].classList.add("show");
        linkerblok[0].classList.add("show");
        backgroundimage[0].classList.add("show");
        homebutton.classList.add("show");
    }, 500);

    /* rechter button 
    rechterbutton.text = "|>";
    rechterbutton.href = "pages/rechter.html";
    rechterblok[0].appendChild(rechterbutton);
    rechterbutton.classList.add("blokbutton");
    */
    /* midden button 
    middenbutton.text = "|>";
    middenbutton.href = "pages/midden.html";
    middenblok[0].appendChild(middenbutton);
    middenbutton.classList.add("blokbutton");
    */
    /* linker button 
    linkerbutton.text = "|>";
    linkerbutton.href = "pages/linker.html";
    linkerblok[0].appendChild(linkerbutton);
    linkerbutton.classList.add("blokbutton");
    */
}

loadin();

