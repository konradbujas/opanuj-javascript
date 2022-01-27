const items = ['item1', 'item2', 'item3']
const copyItems = []

// before
for (let i = 0; i < items.length; i++) {
  copyItems.push(items[i])
}

// after
items.forEach(function(item){
  copyItems.push(item)
})



const first = [1, 2, 3];
const addFirst = [];


const arr3 = [5, 18, 10, 3, 15, 21]
const arr3 = arr3.forEach(el => {
    console.log(el);
    return el + 5;
    console.log(el);
});
console.log(el);
console.log(arr3);
