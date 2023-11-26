n= 3
factors = 0
for i in range(2, n):
    if n % i == 0:
        factors += 1
if factors == 0:
    print("Prime")
else:
    print("Not Prime")
        

#PrimeNumbers from M to N:
m = int(input())
n = int(input())
for i in range(m, n+1):
    factors = 0
    for j in range(2, i-1):
        if i%j == 0:
            factors+=1
    if factors == 0:
        print(i)
