const buttonlinks = {
    cooper: [
        { Text: "Play", href: "../../SlyCooperWeb/Sly1.html" },

    ],
    valley: [
        { Text: "Play", href: "../../valley/homepage.html"}
    ],
    tetris: [
        { Text: "Play", href: "../../Tetris/Tetris.html"}
    ],
    fifa: [
        { Text: "Play", href: "../../museum/fifa_home_page.html"}
    ]
}


function sizeup(keyname){
    let items = ["cooper", "valley", "tetris", "fifa"];
    for(let i = 0; i < items.length; i++){
        let item = document.getElementsByClassName(items[i])[0];
        item.classList.remove("sizeup");
    }

    let itemname = document.getElementsByClassName(keyname)[0];
    itemname.classList.add("sizeup");


    let buttoninfo = buttonlinks[keyname] || [];

    document.querySelectorAll('.gamebutton').forEach(l => l.remove());

    buttoninfo.forEach((ex, ev) => {
    const button = document.createElement("a");
    button.classList.add("gamebutton");
    button.innerHTML = ex.Text;
    button.href = ex.href;
    itemname.appendChild(button);
        
    });




    

}
