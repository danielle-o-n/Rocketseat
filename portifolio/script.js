const botaoXis = document.querySelector(".xis");
const cards = document.querySelectorAll(".card");
const modalGrande = document.querySelector(".modal-grande");
botaoXis.addEventListener("click", ()=>{
    modalGrande.classList.add("ativado");
})

for (const card of cards) {
    addEventListener("click", ()=>{
        modalGrande.remove("ativado")
    })
}

