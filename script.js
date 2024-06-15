const secao = document.querySelector('.monstros')
const button = document.querySelector('.button-monstros')

const todosMonstros = monstros.map((monstros) =>{
    return `<br><div>
        <p>Nome: ${monstros.nome}</p><br>
        <p>Altura: ${monstros.Altura}</p><br>
        <p class='habilidades'>Habilidades: ${monstros.Habilidades}</p>
        <img src='${monstros.foto}'>
    </div>` 
    
})

button.addEventListener('click', () =>{
    // acessa o HTML da pagina e procura por uma classe especifica
    document.documentElement.classList.toggle('dark')
})

secao.innerHTML=todosMonstros


//button.addEventListener('click', () => {
    //             const image = document.createElement('img')
    //             const url= monstros.foto
    //             image.src=url
    //             secao.appendChild(image)
    //         })