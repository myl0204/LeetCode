/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  var mergeTwoLists = function(l1, l2) {
    let list = new ListNode(0);
    const result = list;

    while (l1 && l2) {
      if (l1.val > l2.val) {
        list.next = l2;
        l2 = l2.next;
      } else {
        list.next = l1;
        l1 = l1.next;
      }
      list.next.next = null;
      list = list.next;
    }
  
    list.next = l1 === null ? l2 : l1;
    return result.next;
  };

  while (lists.length > 1) {
    if (lists.length % 2 === 1) lists.push(null)
    const temp = [];
    for (let i = 0; i < lists.length; i = i + 2) {
      temp.push(mergeTwoLists(lists[i], lists[i + 1]))
    }

    lists = temp;
  }

  return lists[0];
};