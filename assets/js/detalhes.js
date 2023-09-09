/*Pagina de Detalhes*/

function contruindoPokemon(pokemon){
    return `
    <h1 class="name-pokemon">${pokemon.name}</h1>

    <div>
        <img class="pokemon-photo" src="${pokemon.photo}" alt="">
    </div>
    
    `
}



document.querySelector('container-pai').addEventListener('load', ()=>{
    console.log("ADRIANO")
})