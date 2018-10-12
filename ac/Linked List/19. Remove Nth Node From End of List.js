// import ListNode from 'ListNode'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 有2种思路。
 * 1. 把每个节点都存到一个数组中。
 * 2. 遍历 2n次(最多)
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  let _head = { next: head };
  let count = 0;
  let current;
  const left = new ListNode(0);
  let _left = left;
  let right;
  while(_head.next) {
    count++
    _head = _head.next
  }
  _head = { next: head }
  for(let i = 0; i < count; i++) {
    current = _head.next;
    _head = current;
    
    if (count - n - 1 >= i) {
      _left.next = new ListNode(current.val);
      _left = _left.next;
    } else if (count - n === i) {
      right = current;
      break;
    }
  }

  if (left === undefined) {
    return head.next;
  } else {
    _left.next = right.next;
    return left.next;
  }
};

// test code
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const t = new ListNode(1);
t.next = new ListNode(3);
t.next.next = new ListNode(4);
const res = removeNthFromEnd(t, 1);
console.log(res);