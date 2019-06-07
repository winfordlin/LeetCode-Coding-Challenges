//reference based stack

function Node(value) {
    this.value = value;
    this.next = null;
}

function Stack() {
    this.first = null;
    this.last = null;
    this.size = 0;
}

Stack.prototype.push = function(val){
    let node = new Node(val);
    if (!this.first){
        this.first = node;
        this.last = node;
    }else {
        let temp = this.first;
        this.first = node;
        this.first.next = temp;
    }
    return ++this.size;
}

Stack.prototype.pop = function(val){
    if (!this.first){
        return null;
    }

    let temp = this.first;

    if (this.first === this.last){
        this.last = null;
    }
    this.first = this.first.next;
     --this.size;

    return temp.val;
}

Stack.prototype.peek = function(){
        return this.first.val;
}