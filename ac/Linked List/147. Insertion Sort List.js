/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if (head === null || head.next === null) return head;
  let sorted = head, sortedTail = head, current = head.next, next, count = 0;
  let _sorted = sorted;

  while (current) {
    let next = current.next;
    count++;
    let n = count;
    let prevSortedNode = null;
    let isSerted = false;
    
    while (n--) {
      if (current.val > sorted.val) {
        prevSortedNode = sorted;
        sorted = sorted.next;
      } else {
        // 插入
        if (prevSortedNode === null) {
          current.next = sorted;
          sorted = current;
          _sorted = current;
          sortedTail.next = null // 防止循环
        } else {
          prevSortedNode.next = current;
          current.next = sorted;
          sorted = _sorted; // reset head
        }
        isSerted = true;
        break;
      }
    }
    if (!isSerted) {
      prevSortedNode.next = current;
      current.next = null;
      sortedTail = current;
      sorted = _sorted
    }
    current = next;
  }
  
  return _sorted
};

// 思路基本一致。
var insertionSortList = function(head) {
  if (head === null || head.next === null) return head;
  let sorted = new ListNode(head.val), prev = head, current = head.next, next;
  let _sorted = sorted;

  while (current) {
    let next = current.next;
    let sortedPrev = null;
    // 遍历已排序链表
    while (sorted) {
      current
      sorted
      if (sorted.val < current.val) {
        sortedPrev = sorted;
        sorted = sorted.next;
      } else {
        sortedPrev
        // 插入
        if (sortedPrev !== null) {
          sortedPrev.next = current;
          current.next = sorted;
          sorted = _sorted;
        } else {
          current.next = sorted;
          sorted = current;
          _sorted = current;
        }
        break;
      }
    }
    // 循环结束 current为最大的情况
    if (sorted === null) {
      sortedPrev.next = current;
      current.next = sorted;
      sorted = _sorted;
    }

    current = next;
  }
  return _sorted;
};