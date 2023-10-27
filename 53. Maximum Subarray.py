#slidingwindow_approach

We initially set the max_subarray value coz we do not want to  print an empty list, after that we iterate  over the nums, if the current_sum value is a negative value we 
make current_sum as zero because we want max_sum, as having negative values will just reduce the max_value in a sub-array. Dont forget it is a sub-array because we 
have to keep it in order...

class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        max_subarray = nums[0]
        current_sum = 0
        for i in nums:
            if current_sum < 0:
                current_sum = 0
            current_sum += i
            max_subarray = max(current_sum,max_subarray)
        return max_subarray
_________________________________________________________________________________________________________________

#time limit exceeded
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        maxy_arr  = []
        for i in range(len(nums)):
            for j in range(i+1, len(nums)+1):
                sub_array = nums[i:j]
                adds = sum(sub_array)
                maxy_arr.append(adds)
        return max(maxy_arr)

