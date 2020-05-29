const imagenes = document.querySelectorAll(`.img-galeria`)
const imagenesLight = document.querySelector(`.agregar-imagen`)
const contenedorLight = document.querySelector(`.imagen-light`)
const hamburgesa1 = document.querySelector(`.hamburger`)


    imagenes.forEach(jose =>{
        jose.addEventListener(`click`,()=>{
            aparecerImagen(jose.getAttribute(`src`))
            console.log(jose)
        })
    })

    contenedorLight.addEventListener(`click`, (e)=>{
        if(e.target != imagenesLight){
            contenedorLight.classList.toggle(`show`)
            imagenesLight.classList.toggle(`showImage`)
            hamburgesa1.style.opacity = `1`
        }
    })

const aparecerImagen = (imagen)=>{
    imagenesLight.src = imagen
    contenedorLight.classList.toggle(`show`)
    imagenesLight.classList.toggle(`showImage`)
    hamburgesa1.style.opacity = `0`

}