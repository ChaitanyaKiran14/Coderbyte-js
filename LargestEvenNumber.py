Largest even number from string
Take as input a string. This string is a mixture of letters, integers and special char. From this string, find the largest even number that can pe possibly formed after removing the duplicates.

If an even is not formed then return -1.

Example Input

infosys@337

Output

-1

Explanation

No even number can be formed

Example Input

Hello#81@21349

Output

984312


a = input()
liss = [int(i) for i in a if i.isdigit()]
val = list(set(liss))

if not any(i % 2 == 0 for i in val):
    print(-1)
else:
    val2 = sorted(val, reverse=True)
    
    final_val = None
    nums = []

    for i in val2[::-1]:
        if i % 2 == 0:
            final_val = i
            break

    for i in val2:
        if i != final_val:
            nums.append(i)

    ans = nums + [final_val] if final_val is not None else []

    final = ''.join(map(str, ans))
    print(final)
