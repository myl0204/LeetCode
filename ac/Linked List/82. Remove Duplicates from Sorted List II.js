/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 100% 有点乱 待改进。
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head === null || head.next === null) return head;
  let p = new ListNode(null);
  p.next = head;
  let prev = head;
  let current = head.next;
  let resultType;
  let duplicateValue = null;
  let shouldCutHead = true;
  if (current.val === prev.val) {
    resultType = 'p';
    duplicateValue = current.val;
  }
  

  while (current) {
    if (current.val !== prev.val) {
      if (duplicateValue !== null) {
        p.next = current;
        duplicateValue = null;
        if (shouldCutHead) head = current;
      } else {
        shouldCutHead = false;
        p = p.next;
      }
    } else {
      duplicateValue = current.val;
    }

    prev = current;
    current = current.next;
  }

  if (duplicateValue !== null) {
    p.next = current;
    duplicateValue = null;
  }
  
  return resultType === 'p'
    ? p.val === null
      ? p.next
      : head
    : head;
};