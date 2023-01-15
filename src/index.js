import './style/scss.scss'
import Modal from "./modal";

const opBtn =  document.querySelector('.btn')
const modal = new Modal()

opBtn.addEventListener('click',()=>{
    modal.open()
})

function modalClose(e){
   if(e.target.dataset === 'close') {
        modal.close()
   }
}


