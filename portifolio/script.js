const botaoXis = document.querySelector(".xis");
const cards = document.querySelectorAll(".card");
const modalGrande = document.querySelector(".modal-grande");

for (const card of cards) {
    card.addEventListener("click", ()=>{
        modalGrande.classList.remove("ativado");
    })
}
botaoXis.addEventListener("click", (e)=>{
    modalGrande.classList.add("ativado");
    console.log(e);
})

