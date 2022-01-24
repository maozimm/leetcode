class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class SingleList {
    constructor () {
        this.size = 0;
        this.head = new ListNode('head');
        this.currentNode = '';
    }
    isEmpty () {
        return this.size === 0;
    }
    findLastNode() {
        var currentNode = this.head;
        while (currentNode.next) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    /**
     * 遍历
     */
    display() {
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
    find(item) {
        var currentNode = this.head;
        while (currentNode && currentNode.val !== item) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    insert(item, element) {
        var node = this.find(item);
        if (!node) {
            return null;
        }
        var nextNode = new ListNode(element);
        nextNode.next = node.next;
        node.next = nextNode;
        this.size ++;
        return nextNode;
    }
    remove(val) {

    }
    append(element) {
        var node = new ListNode(element);
        var lastNode = this.findLastNode();
        lastNode.next = node;
        return node;
    }
}
var list = new SingleList();
list.append(1);
list.insert(1,2);
list.display();
console.log(list.find(1));
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.display();