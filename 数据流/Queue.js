function Queue() {
    this.data = [];
    this.size = 0;
}
Queue.prototype.enqueue = function (data) {
    this.data.push(data)
}
Queue.prototype.dequeue = function () {
    return this.data.shift();
}
var q = new Queue()
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
var d = q.dequeue()
console.log(d);
console.log(console.log(q.data.length));