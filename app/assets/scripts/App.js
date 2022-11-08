import '../styles/styles.css'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from  './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader';
import 'lazysizes'

let stickyHeader = new StickyHeader();
let mobileMenu = new MobileMenu();
let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if(typeof modal == "undefined"){
      import(/* webpackChunkName: "Modal" */'./modules/Modal').then( x => {
        modal=  new x.default()
        setTimeout(() => modal.openTheModal(),20)
      }).catch(()=> console.log("problemm"))
    }else{
      modal.openTheModal()
    }
  })
})

new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial-item__bgwhite"), 60)
if (module.hot) {
  module.hot.accept()
}