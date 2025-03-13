def ma(a):
    a.sort()
    c=-a[0]+a[len(a)-1]
    return c
print(ma([10, 3, 5, 6]))