class ListNode {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addFirst(value) {
        const newNode = new ListNode(value, this.head);
        this.head = newNode;
        this.length++;
    }

    addLast(value) {
        const newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
        } else {
            let temp = this.head;
            while (temp.next) {
                temp = temp.next;
            }
            temp.next = newNode;
        }
        this.length++;
    }

    reverse(){
        let prv=null;
        let curr=this.head;
        let nxt;

        while(curr){
            nxt=curr.next;
            curr.next=prv;
            prv=curr;
            curr=nxt;

        }
        this.head=prv;
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }
}

const ll = new LinkedList();

// ll.addFirst(34);
// ll.addFirst(69);
// ll.addFirst(99);
// ll.addFirst(235);

ll.addLast(34);
ll.addLast(84);
ll.addLast(124);
ll.addLast(734);

ll.print();

console.log("*****************");

ll.reverse()
ll.print();

/*
Output:

34
84
124
734
*****************
734
124
84
34
*

*/
