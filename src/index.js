
import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
 document.querySelector("h1").addEventListener("click",function(e){
 alert("Bana tıkladın!")
 });

const images=document.querySelectorAll("img")
// Kodlar buraya gelecek!
images.forEach(resim => {
    resim.addEventListener("mouseover" ,(event) => {
        //resim.style.filter = "grayscale(100%)";
        event.target.style.filter = "grayscale(100%)";
    } )
    resim.addEventListener("mouseout" ,(event) => {
      
        event.target.style.filter = "grayscale(0)";
    } )
})
window.addEventListener("load" , (event)=>{
    setTimeout(()=>{
    document.querySelector("body").style.background = "red"
    },"2000");
})

images.forEach(resim=>{
    resim.addEventListener("click",(event)=>{
        event.target.style.width="50%"
    })
    resim.addEventListener("dblclick",(event)=>{
        event.target.style.width="100%"
})
})

document.addEventListener("keydown", (event)=>{
    console.log("keypress")
    document.querySelectorAll("img").forEach(resim =>{ 
        resim.removeEventListener("click" , () =>{  
        })
    })
})

window.addEventListener("resize",(e) =>{
    if (window.outerWidth < 800){
        body.style.backgroundColor= "blue"
    }
}

)
for(let i = 0 ; i<15 ; i++){
    const picsum = document.querySelectorAll("img");
    picsum[i].setAttribute("src","https://picsum.photos/800/200")
}

document.querySelectorAll(".gallery-img img").forEach((e) =>{
    e.addEventListener("dragstart",(event) => {
        event.dataTransfer.setData("text" , event.target.id)
    })
});

document.getElementsByClassName("kutu").addEventListener("drop",(event) => {
    const targetImg = event.target.src
    const sourceImg = document.getElementById(event.dataTransfer.getData("text")).src
    event.target.src = sourceImg;
    document.getElementById(event.dataTransfer.getData("text")).src
    src = targetImg;
})
document.getElementsByClassName("kutu")


