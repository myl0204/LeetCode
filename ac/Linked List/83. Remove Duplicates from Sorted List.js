/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 63.73 待改进
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  const result = new ListNode(0);
  let _result = result;
  let _head = new ListNode(0);
  _head.next = head;
  let current = _head;
  const values = [];
  while(_head.next) {
    current = _head.next;
    _head = _head.next;
    if (!values.includes(current.val)) {
      values.push(current.val);
      _result.next = new ListNode(current.val);
      _result = _result.next;
    }
  }
  return result.next;
};


function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ln = new ListNode(2);
ln.next = new ListNode(4);
ln.next.next = new ListNode(2);

var res = deleteDuplicates(ln)

console.log(res)