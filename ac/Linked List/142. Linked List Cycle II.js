/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// something called "two points". I'm not fully understand why fast can eventually catch slow in secord loop.
// i do know fast will eventually catch up slow, but why secord
// let me see..
// even
// when the head size N is odd， x = Math.floor(N / 2) is the first time fast reach the end when slow reach the x + 1.
// 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  if (head === null || head.next === null) return null;

  let slow = head, fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return fast
    }
  }

  return null;
};