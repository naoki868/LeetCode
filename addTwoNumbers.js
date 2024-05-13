var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0)
    let current = dummy
    let carry = 0

    while (l1 || l2 || carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        carry = Math.floor(sum / 10)
        // 連結リストに値を入れている
        current.next = new ListNode(sum % 10)
        // 連結リストの次のポインターを入れている
        current = current.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return dummy.next
};

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0)
    let current = dummy 
    let carry = 0

    while (l1 | l2 | carry) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        carry = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next

        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
        
    }
}