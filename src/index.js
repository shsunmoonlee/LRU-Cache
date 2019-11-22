class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.map = {};
    this.totalItemsInCache = 0;
    this.capacity = capacity;
    this.head = new ListNode();
    this.tail = new ListNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * @param {number} key
   * @return {number}
   */
  get(key) {
    let node = this.map[key];
    if (node === null) {
      return -1;
    }
    // Item has been accessed. Move to the front of the cache.
    this.moveToHead(node);
    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    let node = this.map[key];
    if (!node) {
      let newNode = new ListNode();

      newNode.key = key;
      newNode.value = value;

      this.map[key] = newNode;
      this.addToFront(newNode);
      this.totalItemsInCache++;

      if (this.totalItemsInCache > this.maxCapacity) {
        this.removeLRUEntry();
      }
    } else {
      node.value = value;
      this.moveToHead(node);
    }
  }

  removeLRUEntry() {
    let tail = this.popTail();
    delete this.map[tail.key];
    --this.totalItemsInCache;
  }
  popTail() {
    let tailItem = this.tail.prev;
    this.removeFromList(tailItem);
    return tailItem;
  }
  addToFront(node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
  }
  removeFromList(node) {
    let savedPrev = node.prev;
    let savedNext = node.next;
    savedPrev.next = savedNext;
    savedNext.prev = savedPrev;
  }
  moveToHead(node) {
    this.removeFromList(node);
    this.addToFront(node);
  }
}

export default LRUCache;
