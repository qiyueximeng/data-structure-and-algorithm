# 不同路径II

## 题目

> [中文站](https://leetcode.cn/problems/unique-paths-ii/)

一个机器人位于一个 `m x n` 网格的左上角 （起始点在下图中标记为 “Start” ）。

机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。

现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？

网格中的障碍物和空位置分别用 1 和 0 来表示。

**示例 1：** 

```
输入：obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
输出：2
解释：3x3 网格的正中间有一个障碍物
```

**示例 2：** 

```
输入：obstacleGrid = [[0,1],[0,0]]
输出：1
```

**提示：** 

- `m == obstacleGrid.length`
- `n == obstacleGrid[i].length`
- `1 <= m, n <= 100`
- `obstacleGrid[i][j]` 为 `0` 或 `1`

## 解法

### 动态规划

由于机器人每次只能向右或向下走一步，则当前位置的路径数等于其右侧位置的路径数加上下方位置的路径数，即递推公式为：`a[i][j] = a[i][j + 1] + a[i + 1][j + 1]`。

其中有一些特殊点：

- 由于网格中有障碍物，障碍物区域不能走，即 `if (obstacleGrid[i][j] === 1) a[i][j] = 0`
- 在机器人已经到最右侧或者最下方的时候，会有一个方向超出网格范围，将超出范围的方向记为 0，即 `a[m - 1][n - 2] = a[m - 1][n - 1] + 0`
- 最右下角的位置，在没有障碍物的情况下固定为 `1`


根据上面的分析得出我们的代码：

```typescript
function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
  const [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
  const arr: number[][] = new Array(m).fill(0).map(() => new Array(n).fill(0));

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (obstacleGrid[i][j]) continue;
      if (i === m - 1 && j === n - 1) {
        arr[i][j] = 1;
      } else {
        arr[i][j] = (arr[i + 1]?.[j] ?? 0) + (arr[i]?.[j + 1] ?? 0);
      }
    }
  }
  return arr[0][0];
};
```