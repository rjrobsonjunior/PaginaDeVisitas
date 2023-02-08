function ToggleMode()
{
    //switch mode
    const html = document.documentElement
    html.classList.toggle("Light")

    //seleted profile img
    const img = document.querySelector("#profile img")

     //apply the img according the mode
    if (html.classList.contains("Light")) {
        // se tiver light mode, adicionar a imagem light
        img.setAttribute("src", "./assets/Avatar-Light.png")
    } else {
        // set tiver sem light mode, manter a imagem normal
        img.setAttribute("src", "./assets/Avatar-Dark.png")
    }
}