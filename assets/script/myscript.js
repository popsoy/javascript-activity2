
// function fpName(){
//     return (document.getElementById('pName').value);  
// }

// function fpPrice(){
//     return Number (document.getElementById('pPrice').value);  
// }

// function fpQuantity(){
//     return Number (document.getElementById('pQuantity').value);  
// }

// function fpTotal(){
//     return Number (document.getElementById('displayTotal').value);  
// }

// function fpCash(){
//     return Number (document.getElementById('inputCash').value);  
// }

// function fpTotal2(){
//     return Number (document.getElementById('displayTotal2').value);  
// }


// function fpChange(){
//     return Number (document.getElementById('pChange').innerHTML= fpCash()-fpTotal());  
// }




// Total Button
function myFuncGetTotal(){
    // if(fpName() == "" || fpPrice() == "" || fpQuantity() == ""){
    //     errorValue();

    // }else{
    //     document.getElementById('displayTotal').innerHTML = fpPrice()*fpQuantity();
    // }

    var x = document.getElementById('pPrice').value;
    var y = document.getElementById('pQuantity').value;
        document.getElementById('displayTotal').innerHTML = x*y  ;
      
}


// Save Button
function myFuncSave(){
    // if(fpName() == "" || fpPrice() == "" || fpQuantity() == ""){
    //     errorValue();

    // }else{
    //     document.getElementById('displayProduct').innerHTML = fpName();
    // document.getElementById('displayPrice').innerHTML = fpPrice() ;
    // document.getElementById('displayQuantity').innerHTML = fpQuantity() ;
    // document.getElementById('displayTotal2').innerHTML = fpPrice()*fpQuantity();
    // document.getElementById('displayCash').innerHTML = fpCash() ;
    // document.getElementById('displayChange').innerHTML = fpCash()-fpTotal2();
    // }
    
    var dProduct = document.getElementById('pName').value;
    var disPrice = document.getElementById('pPrice').value;
    var disQuan = document.getElementById('pQuantity').value;
    var disTotal = document.getElementById('displayTotal').innerHTML = disPrice*disQuan;
    var disCash = document.getElementById('inputCash').value;
    // var disChange = document.getElementById('pChange').innerHTML = disTotal-disCash;
     
    
    document.getElementById('displayProduct').innerHTML = dProduct;
    document.getElementById('displayPrice').innerHTML = disPrice ;
    document.getElementById('displayQuantity').innerHTML = disQuan ;
    document.getElementById('displayTotal2').innerHTML = disTotal ;
    document.getElementById('displayCash').innerHTML = disCash ;
    document.getElementById('displayChange').innerHTML = disCash-disTotal;
        
}

// // Errors
// function errorValue(){
//     document.getElementById('displayTotal').innerHTML = "Please put a value";
//     document.getElementById('displayTotal').style.color = red;

// }

// // function errorValue1(){
// //     document.getElementById('displayTotal').innerHTML = "Please put a value";
// //     document.getElementById('displayTotal').style.color = red;

// // }
