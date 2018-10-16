/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  const result = new ListNode(0);
  let _result = result;
  let _head = new ListNode(0);
  let current;
  _head.next = head;
  
  while (_head.next) {
    _head = _head.next;
    if (_head.val !== val) {
      _result.next = new ListNode(_head.val);
      _result = _result.next;
    }
  }
  
  return result.next;
};