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
    removeAll1(val) {
        const ret = new ListNode(null);
        ret.next = this.head;
        let cur = ret;
        while(cur.next) {
            if(cur.next.val === val) {
                cur.next =  cur.next.next;
                continue;
            }
            cur = cur.next;
        }
        return ret.next;
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
list.removeAll(2);
list.display();
// console.log(list.find(1));
// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.display();