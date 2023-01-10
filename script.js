
/**
 * @author: N'GUESSAN MARINA
 */

let color = null;
let mouseDown = false;

/* Recupération de  Body Element index 0 */
let body = document.getElementsByTagName("body")[0];

/*recupération de tous les enfants de la  all  sidebar */
let color_blocks = document.querySelectorAll("#sidebar > *");

/* recuperation de tous les enfants de main "div" */
let fill_blocks = document.querySelectorAll("#main > *");
/* Recuperation du button element index 0 */
let clear_button = document.getElementsByTagName("button")[0];

/* creation des evènements*/
clear_button.addEventListener("click", () => {
    for (blockElement of fill_blocks){
        blockElement.style.backgroundColor = "white";
    }
});


body.addEventListener("mousedown", () => {
    mouseDown = true;
})


body.addEventListener("mouseup", () => {
    mouseDown = false;
})


for (colorElement of color_blocks){
    colorElement.addEventListener("click", (e) => {
        color = e.target.style.backgroundColor;
    });
}

 
for (blockElement of fill_blocks){
    blockElement.addEventListener("mousedown", (e) => {
        if (color != null) e.target.style.backgroundColor = color;
    });
    blockElement.addEventListener("mouseover", (e) => {
        if (mouseDown && color != null) e.target.style.backgroundColor = color;
    });
}
