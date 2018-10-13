/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/** 63.27 % 待改进。
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  let _head = new ListNode(0);
  _head.next = head;
  let current;
  let count = 0;
  let last, right, _left = new ListNode(0);
  
  while(_head.next) {
    count++
    _head = _head.next;
  }

  _head = { next: head };

  const _k = k % count;

  if (_k === 0 || _head.next === null) {
    return _head.next;
  }

  for (let i = 0; i < count; i++) {
    _head = _head.next;
    if (i === count - _k - 1) {
      right = _head.next;
      _left = _head;
    } else if (i === count - 1) {
      last = _head;
    }
  }

  _left.next = null;
  last.next = head;

  return right;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const ln = new ListNode(2);
ln.next = new ListNode(3);
ln.next.next = new ListNode(4);

const res = rotateRight(ln, 3);

console.log(res);
