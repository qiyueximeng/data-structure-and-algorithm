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

#### 动态规划

[70、爬楼梯](./leet-code/70、爬楼梯.md)<br/>
[22、括号生成](./leet-code/22、括号生成.md)<br/>
