class ListNode {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.size = 0;
    this.head = new ListNode();
    this.tail = new ListNode();
    this.cache = new Map();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  /**
   * @param {number} key
   * @return {number} value
   */
  get(key) {
    const node = this.cache.get(key);
    if (node) {
      this.moveToHead(node);
      return node.value;
    }
    return -1;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
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
  }

  popTail() {
    const node = this.tail.prev;
    this.removeNode(node);
  }

  moveToHead(node) {
    this.removeNode(node);
    this.addNode(node);
  }

  removeNode(node) {
    const { prev } = node;
    const { next } = node;
    prev.next = next;
    next.prev = prev;
    this.cache.delete(node.key);
    this.size--;
  }

  addNode(node) {
    const { next } = this.head;
    node.prev = this.head;
    this.head.next = node;
    node.next = next;
    next.prev = node;
    this.cache.set(node.key, node);
    this.size++;
  }
}

export default LRUCache;
