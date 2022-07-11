# deepCopy

Interview question of the [issue #256 of rendezvous with cassidoo](https://buttondown.email/cassidoo/archive/happiness-can-exist-only-in-acceptance-george/).

## The Question

Given a linked list, such that each node contains an additional random pointer which could point to any node in the list, or null, make a deep copy of the list and return the head node of the new copy. If you need to look up details about a deep copy, check [here](https://www.cs.utexas.edu/~scottm/cs307/handouts/deepCopying.htm) and [here](https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy)!

Node definition:
```java
class Node {
	int val;
	Node next;
	Node random;

	public Node(int val) {
		this.val = val;
		this.next = null;
		this.random = null;
	}
}
```

## Installing & Running

Just `yarn` to install all dependencies and then `yarn test` to run the tests!
