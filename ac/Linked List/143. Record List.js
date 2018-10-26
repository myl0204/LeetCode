/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 用数组反而可以更快，why？
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

  var reverseList = function(head) {
    if (head === null || head.next === null) return head;
  
    let result = null, current = head, next;
  
    while (current) {

      next = current.next;

      current.next = result;

      result = current;
  
      current = next;

    }
    return result;
  }

  if (head === null || head.next === null) return;

  let slow = head, fast = head;

  while (slow && fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  slow = reverseList(slow);

  let next, _next;

  let current = head;

  while (slow) {
    next = current.next;

    _next = slow.next;

    current.next = slow;

    slow.next = next;

    current = next;
    
    slow = _next;
  }

  if (current) current.next = null;

  // return head;
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}

// ln = new ListNode(1);

// ln.next = new ListNode(2);

// ln.next.next = new ListNode(3);

// ln.next.next.next = new ListNode(4);

// ln.next.next.next.next = new ListNode(100)

const res = reorderList(null)

res;

// console.log(res.next.next)
