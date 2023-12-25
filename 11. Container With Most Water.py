https://leetcode.com/problems/container-with-most-water/description/



class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
    left = 0
    right = len(height) - 1

    while left < right:
        # Calculate the width between the two pointers
        width = right - left

        # Calculate the height of the container (minimum height of the two lines)
        container_height = min(height[left], height[right])

        # Calculate the area and update max_area if necessary
        current_area = width * container_height
        max_area = max(max_area, current_area)

        # Move the pointers based on the height of the lines
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1

    return max_area

# Test cases
height1 = [1, 8, 6, 2, 5, 4, 8, 3, 7]
print(max_area(height1))  # Output: 49

height2 = [1, 1]
print(max_area(height2))  # Output: 1

------------------------------------------------------------------------------------------------------

Efficient approach:

class Solution:
    def maxArea(self, height: List[int]) -> int:
        max_area = 0
        l,r  = 0,len(height) -1

        while l < r:
            current_area = (r - l) * min(height[l], height[r])
            max_area = max(max_area, current_area)

            if height[l] < height[r]:
                l += 1
            else :
                r -=1

        return max_area


























