const botaoAbrir = document.querySelector("header > button")

const botaoFechar = document.querySelector("header nav button")

const body = document.querySelector("body")

const nav = document.querySelector("header .mobile ")

botaoAbrir.addEventListener("click", abrirMenu)
botaoFechar.addEventListener("click", fechaMenu)

function abrirMenu(){
    body.classList.add("escurecer")
    nav.classList.add("abrir")
}
function fechaMenu(){
    body.classList.remove("escurecer")
    nav.classList.remove("abrir")

}