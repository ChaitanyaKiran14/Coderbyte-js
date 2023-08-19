from itertools import combinations

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        triplets = []
        nums.sort()
        for combo in combinations(nums, 3):
            if sum(combo) == 0:
                triplet = list(combo)
                if triplet not in triplets:
                    triplets.append(list(combo))
        return triplets
