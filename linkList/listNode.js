class ListNode {
    constructor(val, head) {
        this.val = val;
        this.next = head || null;
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
        var currentNode = this.head;
        // 删除头结点
        if (val === this.head) {
            if (!this.isEmpty) {
                this.head.next = null;
                return;
            }
            return;
        }
        while (currentNode.next.val !== val) {
            // 删除不存在的结点
            if (!currentNode.next) {
                return;
            }
            currentNode = currentNode.next;
        }
        currentNode.next = currentNode.next.next;
    }
    append(element) {
        var node = new ListNode(element);
        var lastNode = this.findLastNode();
        lastNode.next = node;
        return node;
    }
    clear() {
        this.head.next = null;
        this.size = 0;
    }
    /**
     * 删除特定的所有的元素
     * @param {*} item 
     */
    removeAll(item) {
        var temHead = new ListNode(null);
        temHead.next = this.head;
        var currentNode = temHead;
        while (currentNode && currentNode.next) {
            if (currentNode.next.val === item) {
                currentNode.next = currentNode.next.next;
                continue;
            }
            currentNode = currentNode.next;
        }
        return temHead.next;
    }
    /**
     * 获取索引位置的val
     * @param {*} index 索引
     */
    getByIndex(index) {
        var currentNode = this.head;
        var nowIndex = 0;
        while (currentNode.next) {
            if (nowIndex === index) {
                return currentNode.val;
            }
            nowIndex ++;
            currentNode = currentNode.next;
        }
        return -1;
    }
    /**
     * 在链表的头结点之前插入新的结点
     * @param {*} val 
     */
    addAtHead(val) {
        var node = new ListNode(val, this.head);
        this.head = node;
    }
}
var list = new SingleList();
list.append(1);
list.append(2);
list.append(2);
list.append(2);
list.append(3);
list.append(1);
list.append(1);
list.append(2);
// list.insert(1,2);
// list.removeAll(2);
list.addAtHead('newHead')
list.display();
console.log(list.getByIndex(11));
// console.log(list.find(1));
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.display();