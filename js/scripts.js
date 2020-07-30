let elemento = document.querySelectorAll('.random p')/*hacer listas*/

function cualquiera() {   
   let x=Math.floor(Math.random() * (256 - 0) + 0);
   let y=Math.floor(Math.random() * (256 - 0) + 0);  
   let z=Math.floor(Math.random() * (256 - 0) + 0);

    return `rgb(${x}, ${y}, ${z})`; 
}

for(let i = 0; i < elemento.length; i++){  
    elemento[i].style.color = cualquiera();
}

console.log(cualquiera());