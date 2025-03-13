def ci(a,b):
    if b:
        if 40<=a:
            return 1
        else:
            return 0
    else:
        if 40<=a<=60:
            return 1
        else:
            return 0
print(ci(70,True))