/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {

    let current = head, first = current;
    // memo用以存储反转过的k长度的链表以及对应链表的“尾巴”
    let count = 0, memo = [], reversed = false;

    function reverse() {
      let result = null;
      while (count < k) {
        count++;
        if (current === null) {
          reverseList(result)
          reversed = true;
          break;
        }
  
        let next = current.next;
    
        current.next = result;
    
        result = current;

        if (count === 1) {
          memo.push(result);
        }
          
        current = next;
      }
      memo.push(result)
      count = 0;
      if (current) {
        reverse();
      }
    }

    reverse();

    for (let i = 0; i < memo.length - 3; i = i + 2) {
      if (i === memo.length - 4 && reversed) {
        memo[i].next = memo[i + 2]
      } else {
        memo[i].next = memo[i + 3]
      }
    }
    const result = memo.length === 2 && memo[1].next === null
      ? memo[0]
      : memo[1]
    return result || null;
};

// 链表反转函数
function reverseList(head) {
  if (!head || head.next === null) return head;

  let result = null, current = head, next;

  while (current) {

    next = current.next;

    current.next = result;

    result = current;

    current = next;

  }

  return result;
}