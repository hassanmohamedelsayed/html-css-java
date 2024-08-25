let btnEl=document.querySelector(`.generate`)
let serialEl=document.querySelector(`.serial`)

btnEl.onclick=function(){
    let characters="212132032hassan12354452mphamed3524elsayed";
    let charscount=20;
    let randomserial="";
    for(let i=0 ;i < charscount ;i++){
        randomserial+=characters[Math.floor(Math.random() * characters.length)];
    }
    serialEl.innerHTML = randomserial;
};