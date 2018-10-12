/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let list = new ListNode(0);
  const result = list;
  let _l1 = l1, _l2 = l2;
  while (_l1 || _l2) {
    if (_l1 === null || _l2 && _l1.val > _l2.val) {
      list.next = new ListNode(_l2.val);
      _l2 = _l2.next;
    } else {
      list.next = new ListNode(_l1.val);
      _l1 = _l1.next;
    }
    list = list.next;
  }
  return result.next;
};

// test code

function ListNode(val) {
  this.val = val;
  this.next = null;
}
const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);

const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

console.log(mergeTwoLists(l1, l2))