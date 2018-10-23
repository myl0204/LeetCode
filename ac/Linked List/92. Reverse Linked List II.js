/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
  if (head === null || head.next === null || m ===n) return head;

  let current = head, result = null, next, count = 0, left, right, resultTail;

  while(current) {
    count++
    if (count >= m && count <= n) {
      next = current.next;

      current.next = result;

      result = current;

      current = next;

      if (count === m ) {
        resultTail = result;
      }

    } else {
      if (count === m - 1) {
        left = current;
      } else if (count === n + 1) {
        right = current;
      }
      current = current.next;
    }
  }

  if (left) left.next = result;
  if (right) resultTail.next = right;

  return left ? head : result;
};