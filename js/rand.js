let switcherLis=document.querySelectorAll(".switcher li")
let imgs=Array.from(document.images)
switcherLis.forEach((li) => {
    li.addEventListener("click",removeActive)
    li.addEventListener("click",mangeImages)
})
function removeActive(){
    switcherLis.forEach((li)=>{
        li.classList.remove("active")
        this.classList.add("active")
})
}function mangeImages(){
    imgs.forEach((img)=>{
    img.style.display=`none`
})
document.querySelectorAll(this.dataset.cat).forEach((el)=>{
el.style.display="block"
})
}