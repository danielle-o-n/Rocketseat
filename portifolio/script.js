const botaoXis = document.querySelector(".xis");
const cards = document.querySelectorAll(".card");
const modalGrande = document.querySelector(".modal-grande");
const modalMedio = document.querySelector(".modal-medio");

for (const card of cards) {
    card.addEventListener("click", (evt)=>{
        modalGrande.classList.remove("ativado");
        modalMedio.querySelector("img").src = evt.currentTarget.querySelector("img").src;
    })
}
botaoXis.addEventListener("click", (e)=>{
    modalGrande.classList.add("ativado");
    console.log(e);
})

