const hamburgesa = document.querySelector(`.hamburger`)
const menu = document.querySelector(`.menu-navegacion`)

    hamburgesa.addEventListener(`click`, function(){
        menu.classList.toggle(`spread`)
    })
    
    window.addEventListener(`click`,e=>{
        
        if(menu.classList.contains(`spread`) && e.target != menu && e.target != hamburgesa){
            menu.classList.toggle(`spread`)
            
        }
    })