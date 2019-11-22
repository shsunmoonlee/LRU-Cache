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
});
