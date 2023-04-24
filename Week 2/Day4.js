//Search in Rotated Sorted Array//
class Solution {
    public int search(int[] nums, int target) {
      int l = 0;
      int r = nums.length - 1;
  
      while (l <= r) {
        final int m = (l + r) / 2;
        if (nums[m] == target)
          return m;
        if (nums[l] <= nums[m]) { // nums[l..m] are sorted
          if (nums[l] <= target && target < nums[m])
            r = m - 1;
          else
            l = m + 1;
        } else { // nums[m..n - 1] are sorted
          if (nums[m] < target && target <= nums[r])
            l = m + 1;
          else
            r = m - 1;
        }
      }
  
      return -1;
    }
  }

  //Find First and Last Position of Element in Sorted Array//
  class Solution {
    public int[] searchRange(int[] nums, int target) {
      final int l = firstGreaterEqual(nums, target);
      if (l == nums.length || nums[l] != target)
        return new int[] {-1, -1};
      final int r = firstGreaterEqual(nums, target + 1) - 1;
      return new int[] {l, r};
    }
  
    // Finds the first index l s.t A[l] >= target
    // Returns A.length if can't find
    private int firstGreaterEqual(int[] A, int target) {
      int l = 0;
      int r = A.length;
      while (l < r) {
        final int m = (l + r) / 2;
        if (A[m] >= target)
          r = m;
        else
          l = m + 1;
      }
      return l;
    }
  }

//   Search Insert Position ///

class Solution {
    public int searchInsert(int[] nums, int target) {
      int l = 0;
      int r = nums.length;
  
      while (l < r) {
        final int m = (l + r) / 2;
        if (nums[m] == target)
          return m;
        if (nums[m] < target)
          l = m + 1;
        else
          r = m;
      }
  
      return l;
    }
  }

  //Valid Sudoku//
  class Solution {
    public boolean isValidSudoku(char[][] board) {
      Set<String> seen = new HashSet<>();
  
      for (int i = 0; i < 9; ++i)
        for (int j = 0; j < 9; ++j) {
          if (board[i][j] == '.')
            continue;
          final char c = board[i][j];
          if (!seen.add(c + "@row" + i) || //
              !seen.add(c + "@col" + j) || //
              !seen.add(c + "@box" + i / 3 + j / 3))
            return false;
        }
  
      return true;
    }
  }

//   Sudoku Solver