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
    var digit = -1, val, up = 0, list = new ListNode(digit), result = list;
    
    while(l1 || l2 || up !==0) {
        digit = (l1 !== null ? l1.val : 0) + (l2 !== null ? l2.val : 0) + up;
        
        if (digit >= 10) {
            val = digit % 10;
            up = 1;
        } else {
            val = digit;
            up = 0;
        }
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }

        list.next = new ListNode(val);
        list = list.next;

    }
    return result.next;
    
};