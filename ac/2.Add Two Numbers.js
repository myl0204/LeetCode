/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let flag = 0, unit = 0;
    const result = new ListNode(unit);
    let current = result;
    while (l1 || l2 || flag === 1) {
        const a = l1 && l1.val || 0;
        const b = l2 && l2.val || 0;
        if (a + b + flag > 9) {
            unit = a + b + flag - 10;
            flag = 1
        } else {
            unit = a + b + flag;
            flag = 0;
        }
        let temp = new ListNode(unit);
        current.next = temp;
        current = current.next;

        l1 = l1 !== null ? l1.next : l1;
        l2 = l2 !== null ? l2.next : l2;
    }
    return result.next;
};