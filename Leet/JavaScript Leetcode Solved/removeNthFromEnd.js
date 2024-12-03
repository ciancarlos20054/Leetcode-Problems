
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) 
{
    let node = head;
    let count = 0;
    while(node)
    {
        count++;
        node = node.next;
    }
    let index = count - n;
    if(index === 0) return head.next;
    let prev = head;
    node = head.next;
    while(index > 1)
    {
        prev = node;
        node = node.next;
        index--;
    }
    prev.next = node.next;
    return head;
};


const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

console.log(removeNthFromEnd(head, 2));