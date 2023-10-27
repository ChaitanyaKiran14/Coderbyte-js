# Have the function PrimeMover(num) return the numth prime number. The range will be from 1 to 10^4.
# For example: if num is 16 the output should be 53 as 53 is the 16th prime number.

m = 1
n = 1000
req_num = 16
primes = []

for i in range(m, n+1):
    factors = 0
    for j in range(2, i+1):
        if i%j == 0: 
            factors +=1
    if factors == 1:
        primes.append(i)
print(primes[req_num -1])
