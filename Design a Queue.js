/*
Reference based Queue
*/

function Node(val){
    this.val = val;
    this.next = null;
}

function Queue(){
    this.front = null;
    this.back = null;
    this.size = 0;
}

Queue.prototype.enqueue = function(val){
    let node = new Node(val);
    if (this.isEmpty()){
        this.front = node;
        this.back = node;
    } else {
        this.back.next = node;
        this.back = this.back.next;
    }
    return ++this.size;
}

Queue.prototype.dequeue = function(val){
    if (this.isEmpty()){
        return 'Underflow Error';
    } 
    
    if (this.first === this.last){
        this.last = null;
    }
        let temp = this.front;
        this.front = this.front.next;
        --this.size;
        return temp.val;
}

Queue.prototype.peek = function(){
    return this.first.val;
}

Queue.prototype.isEmpty = function(){
    return this.size === 0;
}