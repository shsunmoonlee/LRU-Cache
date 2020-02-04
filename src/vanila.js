function ListNode(key, value) {
  this.value = value;
  this.key = key;
  this.next = this.prev = null;
}

/**
 * @param {number} capacity
 */
const LRUCache = function(capacity) {
  this.capacity = capacity;
  this.size = 0;
  this.head = new ListNode();
  this.tail = new ListNode();
  this.cache = new Map();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number} value
 */
LRUCache.prototype.get = function(key) {
  const node = this.cache.get(key);
  if (node) {
    this.moveToHead(node);
    return node.value;
  }
  return -1;
};

LRUCache.prototype.moveToHead = function(node) {
  this.removeNode(node);
  this.addNode(node);
};

LRUCache.prototype.removeNode = function(node) {
  const { prev } = node;
  const { next } = node;
  prev.next = next;
  next.prev = prev;
  this.cache.delete(node.key);
  this.size--;
};

LRUCache.prototype.addNode = function(node) {
  const { next } = this.head;
  node.prev = this.head;
  this.head.next = node;
  node.next = next;
  next.prev = node;
  this.cache.set(node.key, node);
  this.size++;
};

LRUCache.prototype.popTail = function() {
  const node = this.tail.prev;
  this.removeNode(node);
};
/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const node = this.cache.get(key);
  if (node) {
    node.value = value;
    this.moveToHead(node);
  } else {
    this.addNode(new ListNode(key, value));
    if (this.size > this.capacity) {
      this.popTail();
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
