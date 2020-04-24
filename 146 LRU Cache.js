/*
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and put.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache(2);

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
*/

/**
 * @param {number} capacity
 */

//Doubly Linked List for fast removal and insertion to Front, key represents hashtable key, val represents value
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

// Least Recently Used Cache Eviction Policy: 

// FIFO style cache, all accessed added to front, all least used reside towards end, if at capacity, pop end (least recently used)
// keep dummy nodes, head and tail, responsible for FIFO style pop from tail.prev and addition to head.next
// initialize hashtable for fast lookup O(1)
// underlying hashtable value is doubly linked list for fast removal and addition O(1)

var LRUCache = function (capacity) {
    this.capacity = capacity;
    this.map = {};
    this.length = 0;
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */

// disconnect linked node, insert it in front of cache
LRUCache.prototype.get = function (key) {
    if (!(key in this.map)) {
        return -1;
    }
    disconnect(this.map[key]);
    insertAfter(this.map[key], this.head);
    return this.map[key].val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */

//if no key present, create new node
// if key present, disconnect linked node

//add the unconnected node to the front, head.next
//if at capacity, remove end node which is tail.prev (Least Recently Used)
LRUCache.prototype.put = function (key, value) {
    if (!(key in this.map)) {
        this.map[key] = new Node(key, value);
        this.length += 1;
    } else {
        this.map[key].val = value;
        disconnect(this.map[key]);
    }
    insertAfter(this.map[key], this.head);
    if (this.length > this.capacity) {
        delete this.map[this.tail.prev.key];
        this.length -= 1;
        disconnect(this.tail.prev);
    }
};

//helper function to insert (a) node after (b) node 
function insertAfter(a, b) {
    a.next = b.next;
    a.next.prev = a;
    b.next = a;
    a.prev = b;
}

//helper function to unlink a doubly linked node 
function disconnect(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */