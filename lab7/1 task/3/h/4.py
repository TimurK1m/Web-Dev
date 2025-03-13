def ss(a):
    s=False
    c=0
    for i in a:
        if i==6:
            s=True
        elif i==7:
            s=False
        else:
            if s:
                continue
            else:
                c+=i
    return c

print( ss([1, 2, 2, 6, 99, 99, 7]))