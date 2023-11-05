from collections import defaultdict
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        hash_map = defaultdict(int)
        for i in nums:
            hash_map[i] += 1

        sorted_elements = sorted(hash_map.keys(), key=lambda x: hash_map[x], reverse=True)
        return sorted_elements[:k]
