// 단일 연결 리스트
function SinglyLinkedListNode(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.size = 0;
}

SinglyLinkedList.prototype.isEmpty = function() {
  return this.size === 0;
}


SinglyLinkedList.prototype.insert = function(value) {
  if(this.head === null) {
    this.head = new SinglyLinkedListNode(value);
  } else {
    var temp = this.head;
    this.head = new SinglyLinkedListNode(value);
    this.head.next = temp;
  }
  this.size++;
}

SinglyLinkedList.prototype.remove = function(value) {
  var currentHead = this.head;
  if(currentHead.data === value) {
    // 현재 헤드가 삭제하고자 하는 값을 갖고 있으면 바로 삭제한다.
    this.head = currentHead.next;
    this.size--;
  } else {
    var prev = currentHead;
    while(currentHead.next) { // null이 될 때까지
      if(currentHead.data === value) {
        // 해당 노드를 건너뛰어 삭제
        prev.next = currentHead.next;
        prev = currentHead;
        currentHead = currentHead.next;
        break;
      }
      prev = currentHead;
      currentHead = currentHead.next;
    }
    // 삭제하고자 하는 노드가 중간에도 없고 헤드에도 없다면 테일(tail)에 있을 것이다.
    if(currentHead.data === value) {
      prev.next = null;
    }
    this.size--;
  }
}

SinglyLinkedList.prototype.deleteAtHead = function() {
  var toReturn = null;
  if(this.head !== null) {
    toReturn = this.head.data;
    this.head = this.head.next;
    this.size--;
  }
  return toReturn;
}


SinglyLinkedList.prototype.find = function(value) {
  var currentHead = this.head;
  while(currentHead) {
    if(currentHead.data === value) {
      return true;
    } 
    currentHead = currentHead.next;
  }
  return false;
}

var sll1 = new SinglyLinkedList();
sll1.insert(1);
sll1.insert(12);
sll1.insert(20);
// sll1.remove(1);
// sll1.deleteAtHead();
// console.log(sll1.find(19));

// console.log(sll1);
// console.log(sll1.head.next.next);



// 이중 연결 리스트
function DoublyLinkedListNode(data) {
  this.data = data;
  this.next = null;
  this.prev = null;
}


function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
  this.size = 0;
}


DoublyLinkedList.prototype.isEmpty = function () {
  return this.size === 0;
}

DoublyLinkedList.prototype.insertAtHead = function(value) {
  if(this.head === null)  {
    this.head = new DoublyLinkedListNode(value);
    this.tail = this.head;  // head와 tail을 연결
  } else {
    var temp = new DoublyLinkedListNode(value);
    temp.next = this.head;
    this.head.prev = temp;
    this.head = temp;
  }
  this.size++;
}

DoublyLinkedList.prototype.insertAtTail = function(value) {
  if(this.tail === null)  { 
    this.tail = new DoublyLinkedListNode(value);
    this.head = this.tail; // head와 tail을 연결
  } else {
    var temp = new DoublyLinkedListNode(value);
    temp.prev = this.tail;
    this.tail.next = temp;
    this.tail = temp;
  }
  this.size++;
}

DoublyLinkedList.prototype.deleteAtHead = function () {
  var toReturn = null;

  if(this.head !== null) {
    toReturn = this.head.data;

      if(this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
  }
  this.size--;
  return toReturn;
}

DoublyLinkedList.prototype.deleteAtTail = function () {
  var toReturn = null;

  if(this.tail !== null) {
    toReturn = this.tail.data;

      if(this.tail === this.head) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
  }
  this.size--;
  return toReturn;
}

// 잘 동작하지 않는다.
DoublyLinkedList.prototype.findStartingHead = function (value) {
  var currentHead = this.head;
  while(currentHead.next) {
    if(currentHead.data === value) {
      return true;
    }
    currentHead = currentHead.next;
  }
  return false;
}

// 잘 동작하지 않는다.
DoublyLinkedList.prototype.findStartingTail = function (value) {
  var currentTail = this.tail;
  while(currentTail.prev) {
    if(currentTail.data === value) {
      return true;
    }
    currentTail = currentTail.prev;
  }
  return false;
}

var dll1 = new DoublyLinkedList();
dll1.insertAtHead(10); // ddl1's structure: tail: 10  head: 10 
dll1.insertAtHead(12); // ddl1's structure: tail: 10  head: 12
dll1.insertAtHead(20); // ddl1's structure: tail: 10  head: 20
dll1.insertAtHead(30); // ddl1's structure: tail: 10  head: 20
dll1.insertAtTail(999); // ddl1's structure: tail: 10  head: 20
// 20 -> 12 -> 10 -> 30
// console.log(dll1.head.next.next.next.next); // true
// console.log(dll1.findStartingTail(30)); // true
console.log(dll1.findStartingHead(30)) // false
// console.log(dll1);