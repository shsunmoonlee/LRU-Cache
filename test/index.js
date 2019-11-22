import { assert } from "chai";
import LRUCache from "../src";

describe("Awesome test.", () => {
  it("should test default awesome function", () => {
    let obj = new LRUCache(2);
    obj.put(1, 10);
    obj.put(2, 2);
    obj.put(3, 3);
    const expectedVal = 10;
    assert(obj.get(1) === expectedVal, "Diddn't pass");
  });

  it("should re arrange, remove items correctly", () => {
    // ["LRUCache","put","put","get","put","get","put","get","get","get"]
    // [[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
    // Expected: [null,null,null,1,null,-1,null,-1,3,4]
    var obj = new LRUCache(2);
    obj.put(1, 1);
    obj.put(2, 2);
    obj.get(1);
    obj.put(3, 3);
    obj.get(2);
    obj.put(4, 4);
    obj.get(1);
    obj.get(3);
    obj.get(4);
    const expectedVal = 4;
    assert(obj.get(4) === this.head.next.value, "didnt match");
  });
});
