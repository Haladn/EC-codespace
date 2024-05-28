
const mostExpensiveItem = arr =>{
    let expensiveItem = arr[0];

    for(let item of  arr){
        let price1 = expensiveItem['price'] * expensiveItem['stock'];
        let price2 = item.price * item.stock;
        if(price2 > price1){
            expensiveItem = item;
        }
        
    }
    return expensiveItem;
}

const arr = [
    { item: "irn bru", price: 3.25, stock: 50 },
    { item: "fanta", price: 3.98, stock: 45 },
    { item: "diet coke", price: 4.40, stock: 38 }, 
    { item: "7up", price: 3.99, stock: 42 }, 
 ]

console.log(mostExpensiveItem(arr));