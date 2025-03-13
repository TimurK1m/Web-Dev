def su(a):
    c=0
    for i in a:
        if i>=13:
            continue
        else:
            c+=i
    return c
print(su([1, 2, 2, 1, 13]))