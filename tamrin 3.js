
let products = [ 'khiar', 'moz'];
let cost = [5000 , 4000];
let users = [ 'mohamad' ,  'amir'];
let createAt = [3 , 2];

let countProduct = 0;
let fOc;
let sumCost = 0;


while(true){
    users = prompt(' whats your name ?');
    products = prompt('give your fruit');
    countProduct = prompt('what count?');
    fOc = prompt('finish or continue?');

    if(users = 'mohamad'){
        if(products = 'khiar'){
        sumCost += (5000*countProduct);
        sumCost = (sumCost*0.8)
        }
        else if(products = 'moz'){
            sumCost += (4000*countProduct);
            sumCost = (sumCost*0.8)
            }

    } 

    if(users = 'amir'){
        if(products = 'khiar'){
        sumCost += (5000*countProduct);
        sumCost = (sumCost*0.9)
        }
        else if(products = 'moz'){
            sumCost += (4000*countProduct);
            sumCost = (sumCost*0.9)
            }
    } 
    if(fOc === 'finish'){
        break;
    }
}
alert( `you have to pay ${sumCost} for products`)



