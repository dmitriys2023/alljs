export default class Modal {
    $modal = document.querySelector('.modal')
    constructor(options) {

    }
    open(){
        this.$modal.classList.add('open')
    }
    close(){
        this.$modal.classList.remove('open')
    }

    destroy(){

    }
}