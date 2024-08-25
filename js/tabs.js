let tabs=document.querySelectorAll(".tabs li")
let tabsArray =Array.from(tabs);

// console.log(tabsArray)

let divs=document.querySelectorAll(".content>div")
let divsArray=Array.from(divs)

// console.log(divs)

tabsArray.forEach((ele) => {
ele.addEventListener("click",function(s){

    // console.log(ele)
    tabsArray.forEach((ele)=>{
      ele.classList.remove("active")  
    })
s.currentTarget.classList.add("active")
divsArray.forEach((div)=>{
    div.style.display="none"
})
document.querySelector(s.currentTarget.dataset.cont).style.display="block"
})
})