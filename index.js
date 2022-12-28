let checkbill = document.getElementById('checkbill');

let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');

// total bill
function totabillresturant () {
    let total = document.getElementById('totalbill').value;
    const resturanttax = document.getElementById('resturanttax').value;
      
    let tax = Number((total * resturanttax)/100);

    let totalbill = parseInt(total) + parseInt(tax);

    //  currency format
    const dollar = new Intl.NumberFormat('en-us', {
     currency: 'USD',
     style: 'currency'
    })

    alert(dollar.format(`${totalbill}`));

    console.log(dollar.format(totalbill))
 
    let ptag = document.createElement('p');

    let invoice = document.querySelector('.invoice').appendChild(ptag)
 
    invoice.innerHTML = dollar.format(`${totalbill}`);
    invoice.style.color = '#fff';

}

checkbill.addEventListener('click', () =>{
    totabillresturant()
})
 
let perperson = document.getElementById('perpersonbill');
let i = 0;

increment.addEventListener('click', () =>{
 
   totabillresturant(totalbill)
    
      i++;
      if(i<1){
       return false
      }
 
      perperson.innerHTML = i;
    console.log(i);
})

decrement.addEventListener('click', function(e){
   totabillresturant()
    if(i<1){
        return true;
    }
    let decrement_price = totabillresturant.total - perperson;
    perperson.innerHTML =   i--;
    console.log(decrement_price)
})