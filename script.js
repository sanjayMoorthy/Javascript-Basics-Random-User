let viewContainer = document.querySelector(".contentContainer")
let images = document.querySelector(".image")
let nameuser = document.querySelector(".name")
let ranBtn = document.querySelector(".randomBtn")


let datas;

ranBtn.addEventListener("click",()=>{
    let randomNumber = Math.floor(Math.random() * datas.length)
    nameuser.innerText = datas[randomNumber].name.first
    images.src = datas[randomNumber].picture.large
})


window.addEventListener("DOMContentLoaded",()=>{
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data =>{
        datas = data.results
        nameuser.innerText = datas[0].name.first
        images.src = datas[0].picture.large

    }) 
    .catch(()=>console.log("Network error"))
})
