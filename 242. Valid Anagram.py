class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        return sorted(s) == sorted(t)


from collections import defaultdict
class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        #return sorted(s) == sorted(t)

        s_dict = defaultdict(int)
        t_dict = defaultdict(int)

        for char in s:
            s_dict[char] += 1

        for char in t:
            t_dict[char] += 1

        return s_dict == t_dict
