a = int(input())
b = int(input())

c = a - b

k = (c // abs(c) + 1) // 2 if c != 0 else 1

max_value = a * k + b * (1 - k)

print(max_value)