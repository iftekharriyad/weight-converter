//Capture weight input and listening to key up event
let inputField=document.querySelector('#weight').addEventListener('keyup',(e)=>{
    //Get value
    let value=e.target.value
    //Send default gram to display
    unitSelected('gram',value)
     /// listen to unit selection
     document.querySelector('#weight-units').addEventListener('change',(e)=>{
         unitSelected(e.target.value,value)
     })

})

function unitSelected(unit,value){
    if(value===''){
        document.querySelector('#gCard h4').textContent=''
         document.querySelector('#kgCard h4').textContent=''
        document.querySelector('#ounceCard h4').textContent=''
        document.querySelector('#poundCard h4').textContent=''
    }
    else{
        if(unit==='gram'){
            let grams=value
            let kg=value/1000
            let ounces=value/28.35
            let pounds=value/454
            //Capture where to insert the converted weight values
             document.querySelector('#gCard h4').textContent=Number.parseFloat(grams).toFixed(2) 
             document.querySelector('#kgCard h4').textContent=Number.parseFloat(kg).toFixed(2)
            document.querySelector('#ounceCard h4').textContent=Number.parseFloat(ounces).toFixed(2)
            document.querySelector('#poundCard h4').textContent=Number.parseFloat(pounds).toFixed(2)
    
        }
        else if(unit==='kg'){
            let kg=value
            let grams=value*1000
            let ounces=value*35.274
            let pounds=value*2.205
            //Capture where to insert the converted weight values
            document.querySelector('#gCard h4').textContent=Number.parseFloat(grams).toFixed(2) 
            document.querySelector('#kgCard h4').textContent=Number.parseFloat(kg).toFixed(2)
           document.querySelector('#ounceCard h4').textContent=Number.parseFloat(ounces).toFixed(2)
           document.querySelector('#poundCard h4').textContent=Number.parseFloat(pounds).toFixed(2)
        }
        else if(unit==='pounds'){
            let pounds=value
            let kg=value/2.205
            let grams=value*454
            let ounces=value*16
            //Capture where to insert the converted weight values
            document.querySelector('#gCard h4').textContent=Number.parseFloat(grams).toFixed(2) 
            document.querySelector('#kgCard h4').textContent=Number.parseFloat(kg).toFixed(2)
           document.querySelector('#ounceCard h4').textContent=Number.parseFloat(ounces).toFixed(2)
           document.querySelector('#poundCard h4').textContent=Number.parseFloat(pounds).toFixed(2)
        }
        else if(unit==='ounces'){
            let ounces=value
            let kg=value/35.274
            let grams=value*28.35
            let pounds=value/16
            //Capture where to insert the converted weight values
            document.querySelector('#gCard h4').textContent=Number.parseFloat(grams).toFixed(2) 
            document.querySelector('#kgCard h4').textContent=Number.parseFloat(kg).toFixed(2)
           document.querySelector('#ounceCard h4').textContent=Number.parseFloat(ounces).toFixed(2)
           document.querySelector('#poundCard h4').textContent=Number.parseFloat(pounds).toFixed(2)
        }
    }
 
}