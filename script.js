const valorTicket= 200;
let descuentoEstudiante=0.8;
let descuentoTrainee=0.5;
let descuentoJunior=0.15;

const cantidad=document.getElementById("cantidad");
const select=document.getElementById("inlineFormSelectPref");
const botonCalcular=document.getElementById("calcular");
const botonReset=document.getElementById("reset");
const total=document.getElementById("floatingTextarea");

function totalPagar (){
    let totalValor= cantidad.value * valorTicket; 
    if (select.value == 1){
        totalValor = totalValor - (totalValor * descuentoEstudiante);
    }
    else if (select.value == 2) {
     totalValor = totalValor - (totalValor * descuentoTrainee);
    }
    else if (select.value == 3){
    totalValor = totalValor - (totalValor * descuentoJunior);
    }
    else{totalValor = totalValor}
    total.innerHTML = `Total a pagar: $${totalValor}`;
}

botonCalcular.addEventListener("click",totalPagar);

botonReset.addEventListener("click",()=>{
    total.innerHTML= 0;
    cantidad.value = 0;
    select.value = 0;
})


