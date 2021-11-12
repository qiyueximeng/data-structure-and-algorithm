/**
 * 跳表的一种实现方法
 * 可以存储任意值，通过 key 匹配，key 是不重复的
 */
class SkipList<T> {
  private leftSentry = Number.MIN_VALUE;
  private rightSentry = Number.MAX_VALUE;
  private level = 0;
  private _size = 0;
  private head: SkipListNode<T>;
  private tail: SkipListNode<T>;

  constructor() {
    // 头尾哨兵，每层都会存在
    this.head = new SkipListNode(this.leftSentry);
    this.tail = new SkipListNode(this.rightSentry);
    this.head.right = this.tail;
    this.tail.left = this.head;
  }

  insert(key: number, val: T) {
    let prev = this.findNode(key);

    // 节点存在则更新值
    if (prev.key === key) {
      prev.val = val;
      return;
    }

    // 新生成节点并插入到跳表中
    let curr = new SkipListNode(key, val);
    curr.left = prev;
    curr.right = prev.right;
    prev.right!.left = curr;
    prev.right = curr;

    // 节点在每一层都有一半的概率晋升
    let level = 0;
    while (Math.random() < 0.5) {
      if (level >= this.level) {
        this.addLevel();
      }
      level++;

      // 移动到左边第一个有上指针的节点，节点上移
      while (!prev.up) {
        prev = prev.left!;
      }
      prev = prev.up;

      // 创建新的索引节点，进行三通连接，当前节点上移
      const node = new SkipListNode<T>(key);
      node.left = prev;
      node.right = prev.right;
      prev.right!.left = node;
      prev.right = node;
      node.down = curr;
      curr.up = node;
      curr = node;
    }
    this._size++;
  }
  get(key: number) {
    const node = this.findNode(key);
    return node.key === key ? node.val : null;
  }
  remove(key: number) {
    let node: SkipListNode<T> | undefined = this.findNode(key);
    // 未找到需要删除的节点或者 key 为哨兵节点
    if (
      node.key === this.leftSentry ||
      node.key === this.rightSentry ||
      node.key !== key
    ) {
      return;
    }

    while (node) {
      // 删除节点
      node.left!.right = node.right;
      node.right!.left = node.left;
      // 循环删除上层索引节点
      node = node.up;
    }
    this._size--;
  }
  get size() {
    return this._size;
  }
  // 找到指定 key 的最底层前置节点
  private findNode(key: number) {
    let node = this.head;
    while (true) {
      // 在当前层找到前置节点
      while (
        node.right &&
        node.right.key !== this.rightSentry &&
        node.right.key <= key
      ) {
        node = node.right;
      }

      // 有下层则进入下一层，否则退出
      if (node.down) {
        node = node.down;
      } else {
        break;
      }
    }
    return node;
  }
  private addLevel() {
    // 创建新的前后哨兵
    const head = new SkipListNode<T>(this.leftSentry);
    const tail = new SkipListNode<T>(this.rightSentry);
    head.right = tail;
    tail.right = head;
    // 前后哨兵分别与 head 和 tail 连接
    head.down = this.head;
    this.head.up = head;
    tail.down = this.tail;
    this.tail.up = tail;
    // 移动 head 和 tail 到新的哨兵
    this.head = head;
    this.tail = tail;

    this.level++;
  }
}

class SkipListNode<T> {
  key: number;
  val: T | null;

  up?: SkipListNode<T>;
  down?: SkipListNode<T>;
  left?: SkipListNode<T>;
  right?: SkipListNode<T>;

  constructor(k: number, v?: T) {
    this.key = k;
    this.val = v ?? null;
  }
}
