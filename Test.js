const Queue = require('./Queue')

var q = new Queue(3);
console.log(q.enqueue(1)+" "+(q.head)+" " +(q.tail)+" "+q.data.length)
console.log(q.enqueue(2)+" "+(q.head)+" " +(q.tail)+" "+q.data.length)
console.log(q.enqueue(3)+" "+(q.head)+" " +(q.tail)+" "+q.data.length)

console.log(q.enqueue(4)+" "+(q.head)+" " +(q.tail)+" "+q.data.length)
console.log(q.dequeue()+" "+(q.head-1)+" " +q.tail+" "+q.data.length)
console.log(q.dequeue()+" "+(q.head-1)+" " +q.tail+" "+q.data.length)
console.log(q.dequeue()+" "+(q.head-1)+" " +q.tail+" "+q.data.length)
console.log(q.dequeue()+" "+(q.head-1)+" " +q.tail+" "+q.data.length)
q.enqueue(4)
console.log(q.dequeue()+" "+(q.head-1)+" " +q.tail+" "+q.data.length)
q.enqueue(5)
console.log(q.dequeue()+" "+(q.head-1)+" " +q.tail+" "+q.data.length)
// for(var i=1;i<=20;i++){
//     q.enqueue(i)
//     console.log(q.dequeue()+" "+q.head+ " "+q.tail)
// }
// for(var i=0;i<20;i++){
//     console.log(q.data[i])
// }


// q.enqueue(1)
// q.enqueue(2)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// q.enqueue(4)
// q.enqueue(5)
// q.enqueue(6)
// q.enqueue(7)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// q.enqueue(8)
// q.enqueue(9)
// q.enqueue(10)
// q.enqueue(11)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// q.enqueue(12)
// q.enqueue(13)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// q.enqueue(14)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// q.enqueue(15)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// q.enqueue(16)
// q.enqueue(17)
// q.enqueue(18)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)
// console.log(q.dequeue()+" "+q.head)