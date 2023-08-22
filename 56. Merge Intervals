#first sort them based on the first value of the interval, after that declare the mergedlist with initial value of interval[0] after that we run loop from the
second value from intervals, and we check if the first_value of interval to end_value of the recently added value from the mergedList

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        intervals.sort()
        merged = [intervals[0]]
        for interval in intervals[1:]:
            if interval[0] <= merged[-1][1]:
                merged[-1][1] = max(merged[-1][1], interval[1])
            else:
                merged.append(interval)
        return merged
