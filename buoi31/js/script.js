// tính tổng các phần tử 
const numbers = [3, 5, 7];
const sum = numbers.reduce((total, num) => total + num)
console.log(sum)
const order_items = [{ total_price: 3 }, { total_price: 5 }];
// tham so
const tong = order_items.reduce((total, order_item) => total + Number(order_item.total_price), 0)
console.log(tong)