//guardar el estado (columna activa)


let columnaActiva = 1

//selecccionar las columnas

const columnas = document.querySelectorAll('.Card__articles')

//escuchar los clicks en cada una de ellas
columnas .forEach((Card__articles, indice) => {
    Card__articles.addEventListener("click", function(){
       cambiarColumna(indice)
    })
   
})

//cambiar el estado de las columnas
function cambiarColumna(indice){
    columnas[columnaActiva].classList.remove("activa")
    columnas[indice].classList.add("activa")
    columnaActiva = indice
}

