# data-structure-and-algorithm

刷题技巧：

1. 审题：明确题目细节、边界条件、输入输出范围以及一些特殊情况
2. 梳理：将所有解法思考一遍，求出所有解法的时间空间复杂度，得出最优解法
3. 编码：将第二步明确的最优解法用代码实现
4. 测试：给出相应测试的案例，测试案例需要尽可能的覆盖所有情况

## LeetCode 题解合集

### 数据结构

#### 基础数据结构

[1、两数之和](./leet-code/1、两数之和.md)<br/>
[49、字母异位词分组](./leet-code/49、字母异位词分组.md)<br/>
[144、二叉树前序遍历](./leet-code/144、二叉树前序遍历.md)<br/>
[242、有效的字母异位词](./leet-code/242、有效的字母异位词.md)<br/>

#### 树

[144、二叉树的前序遍历](./leet-code/144、二叉树前序遍历.md)<br/>
[94、二叉树的中序遍历](./leet-code/94、二叉树的中序遍历.md)<br/>
[145、二叉树的后序遍历](./leet-code/145、二叉树的后序遍历.md)<br/>
[589、N 叉树的前序遍历](./leet-code/589、N叉树的前序遍历.md)<br/>
[560、N 叉树的后序遍历](./leet-code/560、N叉树的后序遍历.md)<br/>
[429、N 叉树的层序遍历](./leet-code/429、N叉树的层序遍历.md)<br/>
[226、翻转二叉树](./leet-code/226、翻转二叉树.md)<br/>
[98、验证二叉搜索树](./leet-code/98、验证二叉搜索树.md)<br/>
[104、二叉树的最大深度](./leet-code/104、二叉树的最大深度.md)<br/>
[111、二叉树的最小深度](./leet-code/111、二叉树的最小深度.md)<br/>
[297、二叉树的序列化与反序列化](./leet-code/297、二叉树的序列化与反序列化.md)<br/>
[105、从前序与中序遍历序列构造二叉树](./leet-code/105、从前序与中序遍历序列构造二叉树.md)<br/>

### 算法

#### 二分查找

二分查找的前提是：

- 目标函数的单调性（单调增/减）
- 存在上下界
- 能够通过索引访问

代码模板：

```typescript
const [left, right] = [0, array.length - 1];

while (left <= right) {
  const mid = Math.floor((left + right) / 2);
  if (array[mid] === target) {
    // find the target
    break or return result
  } else if (array[mid] < target) {
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}
```

练习题目：

[69、x 的平方根](./leet-code/69、x的平方根.md)<br/>
[367、有效的完全平方数](./leet-code/367、有效的完全平方数.md)<br/>
[33、搜索旋转排序数组](./leet-code/33、搜索旋转排序数组.md)<br/>
[74、搜索二维矩阵](./leet-code/74、搜索二维矩阵.md)<br/>
[153、寻找旋转排序数组中的最小值](./leet-code/153、寻找旋转排序数组中的最小值.md)<br/>

#### 递归

本质是寻找重复性 -> 计算机指令集（if..else../for/recursion）

- 人肉递归很低效，很累
- 找到最近最简方法，将其拆解成可重复解决的问题
- 数学归纳法思维（要保证一串炮竹都能爆，只要保证第一个炮竹能爆，以及下一个炮竹能爆）

代码模板：

```typescript
function recur(level, param) {
  // terminator
  if (level > MAX_LEVEL) {
    // process result
    return;
  }

  // process current logic
  process(level, param);

  // drill down
  recur(level + 1, newParam);

  // restore current status
}
```

练习题目：

#### 分治

分治是递归的一种特殊形式，将一个大的问题分解成多个子问题，分别运算并将结果返回，最后将结果聚合到一起。

代码模板：

```typescript
function divideConquer(problem, param1, param2, ...) {
  // terminator
  if (problem is None) {
    // process result
    return;
  }

  // split problem
  const data = prepareData(problem);
  const subProblems = splitProblem(problem, data);

  // conquer subProblems
  const subResult1 = divideConquer(subProblems[0], p1, ...);
  const subResult2 = divideConquer(subProblems[1], p1, ...);
  // ...

  // process and generate the final result
  result = processResult(subResult1, subResult2, ...);

  // restore current level status
}
```

#### 动态规划

分治 + 最优子结构：通过递归的方式将一个复杂的问题分解成多个简单的子问题。

一般动态规划的问题会让你求一个最优解、最大值、最少方式...，所以在中间结构不需要存储所有状态，只需要存最优状态，来推导出最后全局最优状态。

- 动态规划和递归、分治没有本质区别，关键看有无最优子结构
  - 没有最优子结构则表示所有状态都要计算，并将结果合并，就是分治
- 共性：找到重复子问题
- 差异性：最优子结构、中途可淘汰次优解
- 存储中间状态
- 递推公式（DP 方程）

[62、不同路径](./leet-code/62、不同路径.md)<br/>
[63、不同路径II](./leet-code/63、不同路径II.md)<br/>
[70、爬楼梯](./leet-code/70、爬楼梯.md)<br/>
[22、括号生成](./leet-code/22、括号生成.md)<br/>
