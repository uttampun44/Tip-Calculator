let checkbill = document.getElementById('checkbill');
let perperson = document.getElementById('perpersonbill');

let totalbill;

let dollar;

// total bill
function totabillresturant () {
    let total = document.getElementById('totalbill').value;
    const resturanttax = document.getElementById('resturanttax').value;

    let tax = Number((total * resturanttax)/100);

    totalbill = parseInt(total) +  parseInt(tax);

    //  currency format
    dollar = new Intl.NumberFormat('en-us', {
     currency: 'USD',
     style: 'currency'
    })

    let invoice = document.querySelector('#total')

    invoice.innerHTML = dollar.format(`${totalbill}`);
    invoice.style.color = '#fff';

}

checkbill.addEventListener('click', () =>{

    totabillresturant()
})

let i = 0;
let increment = document.getElementById('increment');
let decrement = document.getElementById('decrement');
let billperpeople = document.querySelector('#perPerson')


function updatebill(){
  let divide = (totalbill / i)
  billperpeople.innerHTML = dollar.format(divide);
}

increment.addEventListener('click', function(){

    if(i >= Number.MAX_VALUE){
        i = 0;
    }
    i++
    perperson.innerHTML = i;
    updatebill();
})

decrement.addEventListener('click', function(){
    if( i >=  Number.MAX_VALUE){
        i = 0
    }
    i--
    perperson.innerHTML = i;
    updatebill();
})