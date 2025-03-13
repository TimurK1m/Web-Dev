def bi(a,b):
    if b:
        a-=5
    if a<=60:
        return 0
    elif 61<=a<=80:
        return 1
    else:
        return 2
print(bi(65,True))