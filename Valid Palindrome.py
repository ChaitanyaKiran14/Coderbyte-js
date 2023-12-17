125. Valid Palindrome
https://leetcode.com/problems/valid-palindrome/

Two pointer approach :
class Solution:
    def isPalindrome(self, s: str) -> bool:
        chars = [i.lower() for i in s if i.isalnum() ]
        left , right = 0, len(chars)-1
        while left < right:
            if chars[left] != chars[right]:
                return False
            left += 1
            right -= 1
        return True

Brutforce approach :

class Solution:
  def isPalindrome(self, s: str) -> bool:
      chars = [i.lower() for i in s if i.isalnum() ]
      new = "".join(chars)
      return new == new[::-1]
