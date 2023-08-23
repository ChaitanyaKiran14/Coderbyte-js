#dynamic programming
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        
        min_price = prices[0]
        max_profit = 0
        
        for price in prices:
            if price < min_price:
                min_price = price
            else:
                max_profit = max(max_profit, price - min_price)
        
        return max_profit
---------------------------------------------------------------------------------------------------
initial_attempt 133 / 212 testcases passed

class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_price = min(prices)
        max_price = []
        indexx = prices.index(min_price)
        for i in prices[:indexx]:
            if i < min_price:
                min_price = i
        for j in prices[indexx+1:]:
            max_price.append(j)       
        return(max(max_price)- min_price) if len(max_price)>1 else 0
