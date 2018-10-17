/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
  let left, right, _left, _right, current = head;
  _left = _right = left = right = null;
  
  while(current) {
    if (current.val >= x) {
      if (!right) {
        right = current;
        _right = right;
      } else {
        _right.next = current;
        _right = _right.next;
      }
      _right;
    } else {
      if (!left) {
        left = current;
        _left = left;
      } else {
        _left.next = current;
        _left = _left.next;
      }
    }
    current = current.next;
  }

  
  if (_right) _right.next = null;
  if (_left) _left.next = right;

  return left || right;
};