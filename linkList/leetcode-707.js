var MyLinkedList = function() {
    this.size = 0; 
    this.head = null;
};
class ListNode {
    constructor(val, head, tail) {
    this.val = val;
    this.next = head || null;
    }
}
/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    var currentNode = this.head;
    var nowIndex = 0;
    while (currentNode) {
        if (nowIndex === index) {
            console.log(currentNode);
            return currentNode.val;
        }
        nowIndex ++;
        currentNode = currentNode.next;
    }
    return -1;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    var node = new ListNode(val, this.head);
    this.head = node;
    this.size ++;
};
/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    var node = new ListNode(val);
    var currentNode = this.head;
    if (this.size === 0) {
        this.head = node;
        this.size ++;
        return;
    }
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = node;
    this.size ++;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index > this.size) {
        return;
    }
    if (index < 0) {
        this.addAtHead(val);
    } else if (index === this.size) {
        this.addAtTail(val);
    } else {
        var currentNode = this.head;
        var nowIndex = 0;
        var node = new ListNode(val);
        while (currentNode.next) {
            if (nowIndex + 1 === index) {
                node.next = currentNode.next;
                currentNode.next = node;
                return;
            }
            nowIndex ++;
            currentNode = currentNode.next;
        }
    }
    this.size++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    var temHead = new ListNode(null, this.head);
    var currentNode = temHead;
    var nowIndex = 0;
    while (currentNode.next) {
        if (nowIndex === index) {
           currentNode.next = currentNode.next.next;
           this.head = temHead.next;
           this.size --;
           return;
        }
        nowIndex ++;
        currentNode = currentNode.next;
    }
};
MyLinkedList.prototype.display = function () {
    var res = '';
    var currentNode = this.head;
    while (currentNode) {
        res += currentNode.val;
        currentNode = currentNode.next;
        if (currentNode) {
            res = res +  '->';
        }
    }
    console.log(res);
}
var linkedList = new MyLinkedList();
linkedList.addAtIndex(0, 10);
// linkedList.addAtHead(1);
// linkedList.addAtTail(3);
// linkedList.addAtIndex(1,2);
// linkedList.deleteAtIndex(0);
// console.log(linkedList.get(0));