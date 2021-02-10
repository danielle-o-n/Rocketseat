const botaoXis = document.querySelector(".xis");
const cards = document.querySelectorAll(".card");
const modalGrande = document.querySelector(".modal-grande");
botaoXis.addEventListener("click", ()=>{
    modalGrande.classList.add("ativado");
})

for (const card of cards) {
    card.addEventListener("click", (e)=>{
        console.log(e);
        modalGrande.classList.remove("ativado")
    })
}